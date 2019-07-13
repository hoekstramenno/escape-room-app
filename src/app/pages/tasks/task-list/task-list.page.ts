import { Component, OnInit } from '@angular/core';
import { DefaultPage } from '../../default.page';
import { TasksService } from '../../../services/api/tasks/tasks.service';
import { Task } from '../../../models/task/task';

@Component({
    selector: 'task-list-page',
    templateUrl: 'task-list.page.html',
    styleUrls: ['task-list.page.scss']
})
export class TaskListPage extends DefaultPage implements OnInit {

    loading = false;
    tasks: Task[];

    constructor(
        protected tasksService: TasksService,
    ) {
        super();
    }

    ngOnInit() {
        this.loadTasks();
    }

    async loadTasks(refresher?) {

        this.loading = true;

        this.tasks = await this.tasksService.getTasks({forceRefresh: !!refresher});

        this.loading = false;

        if (refresher) {
            refresher.complete();
        }

    }
}
