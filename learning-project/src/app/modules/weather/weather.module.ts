import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {WeatherRoutingModule} from './wearther-routing.module';
import {ComponentPageModule} from './component-example/component-page/component-page.module';
import {ServicePageModule} from './service-example/service-page/service-page.module';
import {EffectsModule} from '@ngrx/effects';
import {WeatherPageModule} from './ngrx-example/weather-page/weather-page.module';
import {WeatherEffects} from './ngrx-example/stores/weather.effects';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        WeatherRoutingModule,
        ComponentPageModule,
        ServicePageModule,
        WeatherPageModule,
        EffectsModule.forFeature([WeatherEffects]),
    ],
    exports: [],
})
export class WeatherModule {}
