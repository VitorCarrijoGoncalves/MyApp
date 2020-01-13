// import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http: HttpClientModule) { }

  getLatestMovies() {
    return this.http.get('https://....');
  }

}
