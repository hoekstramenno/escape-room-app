import { Component, Input, OnInit } from '@angular/core';

import { Task } from '../../../models/models';

@Component({
    selector: 'tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {

    @Input()
    tasks: Task[];

    constructor() {
    }

    ngOnInit() {
    }

}
