import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import type {Routes} from '@angular/router';

import {ComponentPageComponent} from './component-example/component-page/component-page.component';
import {ServicePageComponent} from './service-example/service-page/service-page.component';
import { WeatherPageComponent } from './ngrx-example/weather-page/weather-page.component';

const routes: Routes = [
    {
        path: '',
        component: WeatherPageComponent,
    },
    {
        path: 'component',
        component: ComponentPageComponent,
    },
    {
        path: 'service',
        component: ServicePageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WeatherRoutingModule {}