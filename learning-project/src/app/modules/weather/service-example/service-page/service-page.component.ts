import {Component} from '@angular/core';
import {ServiceWeatherService} from '../service-weather.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.less']
})
export class ServicePageComponent {
  weatherData$ = this.serviceWeatherService.getWeatherData();

  constructor(private readonly serviceWeatherService: ServiceWeatherService) {}

}
