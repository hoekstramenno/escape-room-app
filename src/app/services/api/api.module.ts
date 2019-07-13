import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import {
    ApiService,
} from './api';


@NgModule({
    imports: [
        HttpClientModule,
    ],
    providers: [
        HttpClient,
        ApiService,
    ],
})
export class ApiModule {
}
