import { EventEmitter, Injectable } from '@angular/core';
import {
    AppUser
} from '../../../models/models';
import { ApiService } from '../core/api.service';
import { StorageService } from '../../storage/storage/storage.service';
import { UserRegistration } from '../../../models/api/user-registration';
import { LoginApiResponse } from '../../../models/api/login-api-response';
import { RegisterApiResponse } from '../../../models/api/register-api-response';
import { UserCredentials } from '../../../models/api/user-credentials';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    user: AppUser;
    loggedIn = false;
    pin: string;
    lastActiveAt: Date;
    invalidPinAttempts = 0;

    initialized = false;
    pushInitialized = false;

    onLogin = new EventEmitter<void>();
    onLogout = new EventEmitter<void>();
    onAuthenticate = new EventEmitter<void>();
    onRegister = new EventEmitter<void>();
    onUpdateProfile = new EventEmitter<void>();
    onUpdateSensorPermissions = new EventEmitter<void>();

    constructor(
        protected api: ApiService,
        protected storage: StorageService,
    ) {
    }

    async initialize() {
        if (this.initialized) {
            return;
        }

        await this.storage.initialize();

        this.user = Object.assign(new AppUser(), await this.storage.getItem('user'));
        this.pin = await this.storage.getItem('pin');

        const lastActiveAt = await this.storage.getItem('lastActiveAt');
        this.lastActiveAt = lastActiveAt ? new Date(lastActiveAt) : null;

        const invalidPinAttempts = await this.storage.getItem('invalidPinAttempts');
        this.invalidPinAttempts = invalidPinAttempts ? invalidPinAttempts : 0;

        if (this.user.token) {
            this.loggedIn = true;
        }

        this.initialized = true;
    }

    async saveToStorage() {
        await this.storage.initialize();
        await this.storage.setItem('user', this.user);
    }

    async login(credentials: UserCredentials): Promise<LoginApiResponse> {

        this.loggedIn = false;

        const params = Object.assign(credentials);

        try {
            const response: LoginApiResponse = await this.api.post('security/login', params);

            this.user = Object.assign(new AppUser(), response.data.user);

            await this.saveToStorage();
            this.resetLastActiveAt();

            this.loggedIn = true;
            this.onLogin.emit();
            this.onAuthenticate.emit();

            return response;

        } catch (e) {
            console.error('Login error', e);
            throw(e);
        }
    }

    async register(registration: UserRegistration): Promise<LoginApiResponse> {

        const params = Object.assign(registration);

        try {
            const response: RegisterApiResponse = await this.api.post('security/register', params);

            this.user = Object.assign(new AppUser(), response.data.user);

            await this.saveToStorage();

            await this.storage.removeItem('pin');
            this.pin = undefined;

            this.resetLastActiveAt();

            this.loggedIn = true;
            this.onRegister.emit();
            this.onAuthenticate.emit();

            return response;

        } catch (e) {
            console.error('Register error', e);
            throw(e);
        }

    }

    // @TODO: move to security service?
    // async forgotPassword(fields: { email: string }): Promise<ApiResponse> {
    //     return await this.api.post('security/forgot-password', fields);
    // }

    async logout(): Promise<boolean> {
        this.loggedIn = false;

        this.user = new AppUser();
        await this.storage.removeItem('user');

        this.lastActiveAt = null;
        await this.storage.removeItem('lastActiveAt');

        this.invalidPinAttempts = 0;
        await this.storage.removeItem('invalidPinAttempts');

        await this.storage.removeItem('secret');

        this.onLogout.emit();

        return true;
    }

    // @TODO: move to security service?
    async shouldEnterPin(): Promise<boolean> {
        console.log(this.lastActiveAt);

        if (!this.lastActiveAt) {
            return false;
        }
        const diffBetweenNowAndLastActivityTimestamp = new Date().getTime() - this.lastActiveAt.getTime();
        return diffBetweenNowAndLastActivityTimestamp > (1000 * 60 * 1);
    }

    // @TODO: move to security service?
    async verifyPin(pin: string): Promise<boolean> {

        if (pin && this.pin === pin) {
            this.resetLastActiveAt();

            return true;
        } else {
            this.invalidPinAttempts++;
            await this.storage.setItem('invalidPinAttempts', this.invalidPinAttempts);
            return false;
        }
    }

    async setLastActiveAt() {
        this.lastActiveAt = new Date();
        await this.storage.setItem('lastActiveAt', this.lastActiveAt);
    }

    async resetLastActiveAt() {
        this.lastActiveAt = null;
        await this.storage.removeItem('lastActiveAt');

        this.invalidPinAttempts = 0;
        await this.storage.setItem('invalidPinAttempts', this.invalidPinAttempts);
    }

}
