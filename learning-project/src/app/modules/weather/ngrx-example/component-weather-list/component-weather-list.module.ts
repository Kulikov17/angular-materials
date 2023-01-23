import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ComponentWeatherListComponent} from './component-weather-list.component';

import {ComponentWeatherItemModule} from '../weather-item/weather-item.module';

@NgModule({
    declarations: [ComponentWeatherListComponent],
    imports: [CommonModule, ComponentWeatherItemModule],
    exports: [ComponentWeatherListComponent],
})
export class ComponentWeatherListModule {}