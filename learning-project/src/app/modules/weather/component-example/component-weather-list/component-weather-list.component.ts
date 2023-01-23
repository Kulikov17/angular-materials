import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-component-weather-list',
  templateUrl: './component-weather-list.component.html',
  styleUrls: ['./component-weather-list.component.less']
})
export class ComponentWeatherListComponent {
  @Input() weatherData: Weather[] = [];

  @Output() newWeatherEvent = new EventEmitter(); 
  
  updateWeather(newWeather: Weather) {
    this.newWeatherEvent.emit(newWeather);
  }

}
