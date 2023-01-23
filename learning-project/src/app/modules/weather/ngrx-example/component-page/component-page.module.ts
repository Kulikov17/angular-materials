import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ComponentWeatherListModule} from '../weather-list/weather-list.module';

import {ComponentPageComponent} from './component-page.component';

@NgModule({
    declarations: [ComponentPageComponent],
    imports: [CommonModule, ComponentWeatherListModule],
    exports: [ComponentPageComponent],
})
export class ComponentPageModule {}
