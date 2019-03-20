import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: []
})
export class FilmComponent implements OnInit {
  public idFilm = 0;
  public pelicula: any;
  public imagen = '';
  constructor( private ar: ActivatedRoute, private _ps: PeliculasService, private location: Location ) {
    this.ar.params.subscribe( params => {
      this.idFilm = params['id'];
  });
}

  ngOnInit( ) {
    this._ps.getFilm( this.idFilm ).subscribe( data => {
      this.pelicula = data;
      console.log(data);
      if (data.poster_path) {
        this.imagen = `http://image.tmdb.org/t/p/w300${data.poster_path}`;
      } else {
        this.imagen = 'assets/noimage.png';
      }
    });
  }

  goBack() {
    this.location.back(); // go back to previous location
  }

}
