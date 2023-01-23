import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ServiceWeatherItemComponent} from './service-weather-item.component';

@NgModule({
    declarations: [ServiceWeatherItemComponent],
    imports: [CommonModule, FormsModule],
    exports: [ServiceWeatherItemComponent],
})
export class ServiceWeatherItemModule {}