import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public busqueda = [];

  constructor( private _ps: PeliculasService, private router: Router ) { }

  ngOnInit() {
  }

  getSearch( termino: string ) {
    if ( termino.length >= 2) {
      this._ps.getSearch(termino).subscribe( data => {
        this.busqueda = data;
      });
    }
  }

  getImagen(url: string): string {
    return `http://image.tmdb.org/t/p/w500${url}`;
  }

  getFilm( id: number ) {
    this.router.navigate( ['/film', id] );
  }

}
