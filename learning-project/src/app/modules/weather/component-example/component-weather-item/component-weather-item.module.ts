import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';

import {ComponentWeatherItemComponent} from './component-weather-item.component';

@NgModule({
    declarations: [ComponentWeatherItemComponent],
    imports: [CommonModule, FormsModule],
    exports: [ComponentWeatherItemComponent],
})
export class ComponentWeatherItemModule {}