import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private apiKey = '5c3bdaeb02e0c2eef30776ba5552e022';
  private urlMovieDb = 'https://api.themoviedb.org/3/';

  constructor( private jsonp: Jsonp) {}

  getPopulares() {
    const url = `${this.urlMovieDb}discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe(map(res => res.json().results ));
  }

  getCartelera() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}discover/movie?primary_release_date.gte=2018-10-01&primary_release_date.lte=2018-10-24&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe( map( res => res.json().results ) );
  }


  getMejoresPuntuadas() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe( map( res => res.json().results ) );
  }

  getMejoresAnioPasado() {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}discover/movie?primary_release_year=2017&sort_by=vote_average.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe( map( res => res.json().results ) );
  }

  getFilm(id: number) {
    const url = `${this.urlMovieDb}movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe( map( res => res.json().results ) );
  }

  getSearch( termino ) {
    // const search = "https://api.themoviedb.org/3/search/movie?api_key=5c3bdaeb02e0c2eef30776ba5552e022&language=es-MX&query=Marbel";
    const url = `${this.urlMovieDb}search/movie?api_key=${this.apiKey}&language=es&query=${termino}&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url ).pipe( map( data => data.json().results ));
  }
}
