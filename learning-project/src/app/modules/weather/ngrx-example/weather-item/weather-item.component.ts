import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {Weather} from '../../models/weather';
import {weatherActions} from '../stores/weather.actions';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.less']
})
export class WeatherItemComponent {
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

  constructor(private readonly store: Store) {}

  changeWeather() {
    this.store.dispatch(weatherActions.updateWeatherData(this.weatherForm));
  }
}
