import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/todos/1';
  }

  public getApiRequest(): Observable<{ id: number }> {
    return this.httpClient.get<{ id: number }>(this.url);
  }
}
