import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {WeatherItemComponent} from './weather-item.component';

@NgModule({
    declarations: [WeatherItemComponent],
    imports: [CommonModule, FormsModule],
    exports: [WeatherItemComponent],
})
export class WeatherItemModule {}