import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-component-weather-item',
  templateUrl: './component-weather-item.component.html',
  styleUrls: ['./component-weather-item.component.less']
})
export class ComponentWeatherItemComponent {
  @Input() set weather(value: Weather) {
    this.weatherForm.id = value.id;
    this.weatherForm.city = value.city;
    this.weatherForm.temperature = value.temperature;
  } 

  @Output() newWeatherEvent = new EventEmitter(); 

  weatherForm: Weather = {
    id: '',
    city: '',
    temperature: '',
  }

  changeWeather() {
    this.newWeatherEvent.emit(this.weatherForm);
  }
}
