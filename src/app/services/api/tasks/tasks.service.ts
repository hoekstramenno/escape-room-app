import { Injectable } from '@angular/core';

import { ApiResponse, Task } from '../../../models/models';
import { ApiService } from '../core/api.service';
import { UserService } from '../user/user.service';
import { StorageService } from '../../storage/storage/storage.service';


@Injectable({
    providedIn: 'root'
})
export class TasksService {

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

    async getTasks(options: any = {forceRefresh: false}): Promise<Task[]> {

        await this.initialize();

        if (!this.tasks || options.forceRefresh) {
            try {
                const tasksResponse: ApiResponse = await this.api.get('tasks', null, this.userService.user.token);
                const unlockedTasks: number[] = (await this.storage.getItem('unlockedTasks')) || [];

                this.tasks = tasksResponse.data.map(task => {
                    task = Object.assign(new Task(), task);
                    if (unlockedTasks.find(id => id === task.id)) {
                        task.locked = false;
                    }
                    return task;
                });

            } catch (e) {
                console.log('Tasks error', e);
                return null;
            }
        }

        if (options.limit) {
            return this.tasks.slice(0, options.limit);
        }

        return this.tasks;
    }

    async getTaskById(taskId: number): Promise<Task> {

        await this.initialize();

        if (!this.tasks) {
            await this.getTasks();
        }
        return new Promise<Task>((resolve, reject) => {
            const task: Task = this.tasks ? this.tasks.find(a => a.id === taskId) : null;

            if (task && !task.locked) {
                resolve(task);
            } else {
                reject(new Error('Task not available.'));
            }
        });

        // try {
        //     const taskResponse: ApiResponse = await this.api.get(`news/${taskId}`, null, this.userService.user.token);
        //     const task = Object.assign(new Task(), taskResponse.data.article);
        //     console.log(task);
        //
        //     return task;
        // } catch (e) {
        //     console.log('News error', e);
        //     return null;
        // }

    }

}
