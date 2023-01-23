import {Component, Input} from '@angular/core';
import {Weather} from '../../models/weather';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.less']
})
export class WeatherListComponent {
  @Input() weatherData: readonly Weather[] = [];
}
