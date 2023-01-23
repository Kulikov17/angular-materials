import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {WeatherListComponent} from './weather-list.component';

import {WeatherItemModule} from '../weather-item/weather-item.module';

@NgModule({
    declarations: [WeatherListComponent],
    imports: [CommonModule, WeatherItemModule],
    exports: [WeatherListComponent],
})
export class WeatherListModule {}