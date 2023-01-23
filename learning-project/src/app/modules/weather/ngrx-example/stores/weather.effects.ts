import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../../models/weather';
import {weatherActions} from './weather.actions';
import {TuiAlertService} from '@taiga-ui/core';

@Injectable()
export class WeatherEffects {
    constructor(
        private readonly actions$: Actions,
        private readonly http: HttpClient,
        private readonly alertService: TuiAlertService,
    ) {}

    // загрузить данные по погоде
    readonly loadWeather$ = createEffect(() =>
        this.actions$.pipe(
            ofType(weatherActions.loadWeatherData),
            switchMap(() =>
                this.http.get<Weather[]>('/weather').pipe(
                    map(weatherData => weatherActions.loadWeatherDataSuccess(weatherData)),
                    catchError(() => of(weatherActions.loadWeatherDataFail())),
                ),
            ),
        ),
    );
}