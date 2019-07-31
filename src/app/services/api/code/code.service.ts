import { Injectable } from '@angular/core';

import { ApiResponse, Task } from '../../../models/models';
import { ApiService } from '../core/api.service';
import { UserService } from '../user/user.service';
import { StorageService } from '../../storage/storage/storage.service';

export interface IconValidationInterface {
    number: number,
    icon: string,
    code: string,
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class CodeService {

    tasks: Task[];

    initialized = false;

    constructor(
        protected api: ApiService,
        protected userService: UserService,
        protected storage: StorageService,
    ) {
    }

    async initialize() {
        if (this.initialized) {
            return;
        }

        await this.userService.initialize();

        this.initialized = true;
    }

    async getIcons(): Promise<ApiResponse> {
        return await this.api.post('tasks/icons');
    }

    async validate(validationOptions: IconValidationInterface): Promise<boolean> {

        await this.initialize();

        try {
            const validationResponse: ApiResponse = await this.api.post('tasks/validate', validationOptions);
            const unlockedTasks: number[] = (await this.storage.getItem('unlockedTasks')) || [];
            const currentPoints: number = (await this.storage.getItem('currentPoints')) || 0;

            if (validationResponse.data.validate === true) {

                let newScore = currentPoints + validationResponse.data.points;

                unlockedTasks.push(validationResponse.data.next);
                await this.storage.setItem('unlockedTasks', unlockedTasks);
                await this.storage.setItem('currentPoints', newScore);
                return true;
            }

            if (validationResponse.data.validate === false) {
                return false;
            }

        } catch (e) {
            console.log('Tasks error', e);
            return null;
        }
    }

}
