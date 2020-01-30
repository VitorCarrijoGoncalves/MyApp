import { Http } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseApiPath = 'https://api.themoviedb.org/3';

  constructor(public http: Http) { }

  getLatestMovies() {
    return this.http.get(this.baseApiPath + '/movie/popular?api_key=key');
  }

}
