import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': 'true'
      })
    };
    url = environment.apiUrl
    getMyPost(): Observable<any> {
    console.log(this.url);
    return this.http.get<any>(this.url);
  }
}
