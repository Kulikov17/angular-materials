import {createActionGroup, emptyProps} from '@ngrx/store';
import {Weather} from '../../models/weather';

export const weatherActions = createActionGroup({
    source: 'WEATHER',
    events: {
        'Load weather data': emptyProps(),
        'Load weather data success': (weatherData: readonly Weather[]) => ({weatherData}),
        'Load weather data fail': emptyProps(),

        'Update weather data': (newWeatherData: Weather) => ({newWeatherData}),
    },
});
