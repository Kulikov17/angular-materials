import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Weather} from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class ServiceWeatherService {
  private weatherDataMock: Weather[] = [
    {
      id: '1',
      city: 'Moscow',
      temperature: '-2'
    },
    {
      id: '2',
      city: 'Saransk',
      temperature: '-8'
    }
  ]

  private weatherData$ = new BehaviorSubject<Weather[]>(this.weatherDataMock);

  getWeatherData() {
    return this.weatherData$;
  }

  updateWeather(newWeather: Weather) {
    this.weatherData$.next(this.weatherData$.value.map(weather => weather.id === newWeather.id ? newWeather : weather));
  }
}
