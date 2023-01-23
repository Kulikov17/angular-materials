import {Action, ActionType, createReducer, on} from '@ngrx/store';
import {Weather} from '../../models/weather';
import {weatherActions} from './weather.actions';

export interface WeatherState {
    weatherData: readonly Weather[];
    
    loading: boolean;
    loadingError: boolean;
}

export const WEATHER_STATE_KEY = 'weather';

const initialState: WeatherState = {
    weatherData: [],

    loading: false,
    loadingError: false,
};

const loadWeatherDataReducer = (state: WeatherState) => ({
    ...state,
    weatherData: [],
    loading: true,
    loadingError: false,
});

const loadWeatherDataSuccessReducer = (
    state: WeatherState,
    {weatherData}: ActionType<typeof weatherActions.loadWeatherDataSuccess>,
) => ({
    ...state,
    loading: false,
    loadingError: false,
    weatherData,
});

const loadWeatherDataFailReducer = (state: WeatherState) => ({
    ...state,
    loading: false,
    loadingError: true,
});

const updateWeatherDataReducer = (
    state: WeatherState,
    {newWeatherData}: ActionType<typeof weatherActions.updateWeatherData>,
) => ({
    ...state,
    loading: false,
    loadingError: false,
    weatherData: state.weatherData.map(weather => weather.id === newWeatherData.id ? newWeatherData : weather),
});

const reducer = createReducer(
    initialState,

    on(weatherActions.loadWeatherData, loadWeatherDataReducer),
    on(weatherActions.loadWeatherDataSuccess, loadWeatherDataSuccessReducer),
    on(weatherActions.loadWeatherDataFail, loadWeatherDataFailReducer),

    on(weatherActions.updateWeatherData, updateWeatherDataReducer),
);

export function weatherReducer(state: WeatherState | undefined, action: Action): WeatherState {
    return reducer(state, action);
}