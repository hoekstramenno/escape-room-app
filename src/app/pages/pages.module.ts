import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { IonicSelectableModule } from 'ionic-selectable';

// import { PipesModule } from '../pipes/pipes.module';
// import { DirectivesModule } from '../directives/directives.module';
// import { FormComponentsModule } from '../components/form/form.module';
// import { UiComponentsModule } from '../components/ui/ui.module';
// import { ServicesModule } from '../services/services.module';


@NgModule({
    exports: [
        CommonModule,
        IonicModule,
        RouterModule,
        // PipesModule,
        // ServicesModule,
        // DirectivesModule,
        // FormComponentsModule,
        // UiComponentsModule,
        // IonicSelectableModule,
    ],
})
export class PagesModule {
}
