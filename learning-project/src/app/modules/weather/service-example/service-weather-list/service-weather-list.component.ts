import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-service-weather-list',
  templateUrl: './service-weather-list.component.html',
  styleUrls: ['./service-weather-list.component.less']
})
export class ServiceWeatherListComponent {
  @Input() weatherData: Weather[] = [];
}
