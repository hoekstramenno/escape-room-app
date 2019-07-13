import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { DefaultPage } from '../default.page';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage extends DefaultPage implements OnInit {

    loading = false;

    latestEvents: Event[];


    constructor(
        protected popoverCtrl: PopoverController,
        protected route: ActivatedRoute,
    ) {
        super();
    }

    ngOnInit() {
        this.loadData();
    }


    async loadData(refresher?) {

        this.loading = true;

        this.loading = false;


    }
}
