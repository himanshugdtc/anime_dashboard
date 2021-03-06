import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  url: string = 'https://api.audiomack.com/v1';
  constructor(private http: HttpClient) {}
  getAuth() {
    return this.http
      .get<{ tracks: object[] }>(
        'https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm'
      )
      .pipe(
        map((data) => {
          return data.tracks[0];
        })
      );
  }
}
