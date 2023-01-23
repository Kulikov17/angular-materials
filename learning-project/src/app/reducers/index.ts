import {InjectionToken} from '@angular/core';
import type {ActionReducerMap} from '@ngrx/store';
import {weatherReducer, WeatherState, WEATHER_STATE_KEY} from '../modules/weather/ngrx-example/stores/weather.reducer';

export {metaReducers} from './meta';

export interface State {
    [WEATHER_STATE_KEY]: WeatherState;
}

export const reducers: ActionReducerMap<State> = {
    [WEATHER_STATE_KEY]: weatherReducer,
};

export const reducerToken = new InjectionToken<ActionReducerMap<State>>('reducers');
export const reducerProvider = [{provide: reducerToken, useValue: reducers}];
