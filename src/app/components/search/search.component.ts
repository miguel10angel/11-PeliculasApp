import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public busqueda = [];

  public search;

  constructor( public _ps: PeliculasService, private router: Router, private ar: ActivatedRoute ) {
    this.ar.params.subscribe( params => {
      this.search = params['termino'];
      this.getSearch( params['termino'] );
    });
  }

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
