import { Injectable } from '@angular/core';

import { StorageImplementationInterface } from './implementation/storage-implementation.interface';
// import { SecureStorageImplementation } from './implementation/secure-storage-implementation';
import { NativeStorageImplementation } from './implementation/native-storage-implementation';
import { LocalStorageImplementation } from './implementation/local-storage-implementation';


@Injectable({
    providedIn: 'root'
})
export class StorageService {

    storageImplementation: StorageImplementationInterface;

    initialized = false;


    async initialize() {

        if (this.initialized) {
            return true;
        }

        // const secureStorageImplementation = new SecureStorageImplementation();
        // if ( await secureStorageImplementation.isAvailable() ) {
        //     this.storageImplementation = secureStorageImplementation;
        //     this.initialized = true;
        //     return true;
        // }

        const nativeStorageImplementation = new NativeStorageImplementation();
        if ( await nativeStorageImplementation.isAvailable() ) {
            this.storageImplementation = nativeStorageImplementation;
            this.initialized = true;
            return true;
        }

        const localStorageImplementation = new LocalStorageImplementation();
        if ( await localStorageImplementation.isAvailable() ) {
            this.storageImplementation = localStorageImplementation;
            this.initialized = true;
            return true;
        }

        this.initialized = true;
        return true;
    }

    async getItem(key: string) {
        if (!this.initialized) {
            await this.initialize();
        }
        return await this.storageImplementation.getItem(key);
    }

    async setItem(key: string, value: any) {
        if (!this.initialized) {
            await this.initialize();
        }
        return await this.storageImplementation.setItem(key, value);
    }

    async removeItem(key: string) {
        if (!this.initialized) {
            await this.initialize();
        }
        return await this.storageImplementation.removeItem(key);
    }

}
