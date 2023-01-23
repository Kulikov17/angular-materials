import {Component, Input} from '@angular/core';
import {Weather} from '../../models/weather';
import {ServiceWeatherService} from '../service-weather.service';

@Component({
  selector: 'app-service-weather-item',
  templateUrl: './service-weather-item.component.html',
  styleUrls: ['./service-weather-item.component.less']
})
export class ServiceWeatherItemComponent {
  @Input() set weather(value: Weather) {
    this.weatherForm.id = value.id;
    this.weatherForm.city = value.city;
    this.weatherForm.temperature = value.temperature;
  } 

  weatherForm: Weather = {
    id: '',
    city: '',
    temperature: '',
  }

  constructor(private readonly serviceWeatherService: ServiceWeatherService) {}

  changeWeather() {
    this.serviceWeatherService.updateWeather(this.weatherForm);
  }
}
