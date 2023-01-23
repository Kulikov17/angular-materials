import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { delay, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Weather } from '../modules/weather/models/weather';

@Injectable({
  providedIn: 'root'
})
export class MockApiInterceptor implements HttpInterceptor {
  private weatherDataMock: Weather[] = [
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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.method === "GET" && request.url.endsWith("/weather")) {
      return of(new HttpResponse({ status: 200, body: this.weatherDataMock })).pipe(delay(3000));
    }

    /*if (request.method === "GET" && request.url.endsWith("/weather")) {
      const error = { name: 'ApiError', message:'ApiError', response: {}};
      
      return throwError(error);
    }*/
    
    return next.handle(request)
  }

}