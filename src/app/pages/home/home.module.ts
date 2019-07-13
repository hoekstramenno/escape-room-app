import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesModule } from '../pages.module';
import { HomePage } from './home.page';
// import { NotificationsPopoverPageModule } from '../notifications/popover/notifications-popover.module';
// import { ChatComponentsModule } from '../../components/chat/chat.module';
// import { EventsComponentsModule } from '../../components/events/events.module';
// import { NewsComponentsModule } from '../../components/news/news.module';


@NgModule({
    imports: [
        PagesModule,
        // ChatComponentsModule,
        // EventsComponentsModule,
        // NewsComponentsModule,
        // NotificationsPopoverPageModule,
        RouterModule.forChild([{path: '', component: HomePage}]),
    ],
    declarations: [HomePage]
})
export class HomePageModule {
}
