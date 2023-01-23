import {Component} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.less']
})
export class ComponentPageComponent {
  weatherData: Weather[] = [
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

  updateWeather(newWeather: Weather) {
    this.weatherData = this.weatherData.map(weather => weather.id === newWeather.id ? newWeather : weather);
  }

}
