import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ServiceWeatherListComponent} from './service-weather-list.component';

import {ServiceWeatherItemModule} from '../weather-item/weather-item.module';

@NgModule({
    declarations: [ServiceWeatherListComponent],
    imports: [CommonModule, ServiceWeatherItemModule],
    exports: [ServiceWeatherListComponent],
})
export class ServiceWeatherListModule {}