import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ServiceWeatherListModule} from '../service-weather-list/service-weather-list.module';

import {ServicePageComponent} from './service-page.component';

@NgModule({
    declarations: [ServicePageComponent],
    imports: [CommonModule, ServiceWeatherListModule],
    exports: [ServicePageComponent],
})
export class ServicePageModule {}
