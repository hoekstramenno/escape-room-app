import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimeLeftPage } from './time-left.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PagesModule } from '../pages.module';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  imports: [
    PagesModule,
    RouterModule.forChild([{path: '', component: TimeLeftPage}]),
    CountdownModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  declarations: [TimeLeftPage]
})
export class TimeLeftPageModule {}
