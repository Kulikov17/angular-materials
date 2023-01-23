import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {TuiLoaderModule} from '@taiga-ui/core';
import {WeatherListModule} from '../weather-list/weather-list.module';

import {WeatherPageComponent} from './weather-page.component';

@NgModule({
    declarations: [WeatherPageComponent],
    imports: [CommonModule, WeatherListModule, TuiLoaderModule],
    exports: [WeatherPageComponent],
})
export class WeatherPageModule {}
