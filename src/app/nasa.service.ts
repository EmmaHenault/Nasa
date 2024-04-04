import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { ImageOfTheDay } from './nasa.models';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  
  constructor(private http: HttpClient) {}

  getImageOfTheDay(): Observable<ImageOfTheDay> {
    const url = `https://api.nasa.gov/planetary/apod/?api_key=${environment.apiKey}`;
    return this.http.get<ImageOfTheDay>(url);
  }
}
