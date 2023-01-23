import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'weather',
        loadChildren: async () => (await import('./modules/weather/weather.module')).WeatherModule,
        data: {
            title: 'Погода',
        },
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
