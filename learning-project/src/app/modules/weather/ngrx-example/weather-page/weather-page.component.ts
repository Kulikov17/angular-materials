import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {weatherActions} from '../stores/weather.actions';
import {weatherSelectors} from '../stores/weather.selectors';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.less']
})
export class WeatherPageComponent implements OnInit {
  isLoading$ = this.store.select(weatherSelectors.isLoading);
  weatherData$ = this.store.select(weatherSelectors.weatherData);

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.store.dispatch(weatherActions.loadWeatherData());
  }

}
