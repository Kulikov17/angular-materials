

import {createFeatureSelector, createSelector} from '@ngrx/store';
import {WeatherState, WEATHER_STATE_KEY} from './weather.reducer';

const weatherStateSelector = createFeatureSelector<WeatherState>(WEATHER_STATE_KEY);

export const weatherSelectors = {
    weatherData: createSelector(weatherStateSelector, state => state.weatherData),
    isLoading: createSelector(weatherStateSelector, state => state.loading),
    isLoadingError: createSelector(weatherStateSelector, state => state.loadingError),
}