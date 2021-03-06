import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../../models/task/task';
import { TasksService, StorageService } from '../../../services/services';
import { DefaultPage } from '../../default.page';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage extends DefaultPage implements OnInit {

  task: Task;
  error = null;
  loading = false;

  constructor(
      protected tasksService: TasksService,
      protected activatedRoute: ActivatedRoute,
      protected storage: StorageService,
  ) {
    super();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.id) {
        this.loadTask(+params.id);
      }
    });
  }

  async loadTask(taskId: number) {
    await this.storage.initialize();

    try {
      this.task = await this.tasksService.getTaskById(taskId);

    } catch (e) {
      this.error = e.message;
    }

  }
}
