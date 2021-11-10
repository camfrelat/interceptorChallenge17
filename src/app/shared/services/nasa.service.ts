import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private service: HttpClient;

  constructor(service: HttpClient) {
    this.service = service;
  }

  public getImageOfTheDay(): Observable<string> {
    const observable = this.service.get<{ url: string }>(
      'https://api.nasa.gov/planetary/apod?api_key=6p2gacC8BdP9jhziHmphb6P1H3l6pk3Qg75A3GNH'
    );
    return observable.pipe(
      map((result) => {
        return result.url;
      })
    );
  }
}
