import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: []
})
export class CategoriesComponent implements OnInit {
  cargando = true;
  public populares = [];
  public cartelera = [];
  public mejoresPuntuadas = [];
  public mejoresAnioPasado = [];

  constructor(private _ps: PeliculasService, private router: Router) {}

  ngOnInit() {
    this.getPopulares();
    this.getCartelera();
    this.getMejoresPuntuadas();
    this.getMejoresAnioPasado();
    this.cargando = false;
  }

  getPopulares() {
    this._ps.getPopulares().subscribe((data: any) => {
      this.populares = data;
    });
  }

  getImagen(idx, tamanio): string {
    return `url(http://image.tmdb.org/t/p/w${tamanio}${this.populares[idx].backdrop_path})`;
  }

  getCartelera() {
    this._ps.getCartelera().subscribe( data => {
      this.cartelera = data;
    });
  }

  getImagenCartelera(idx: number, tamanio: number): string {
    return `url(http://image.tmdb.org/t/p/w${tamanio}${this.cartelera[idx].backdrop_path})`;
  }

  getMejoresPuntuadas() {
    this._ps.getMejoresPuntuadas().subscribe( data => {
      this.mejoresPuntuadas = data;
    });
  }

  getImagenMejoresPuntuadas(idx: number, tamanio: number): string {
    return `url(http://image.tmdb.org/t/p/w${tamanio}${this.mejoresPuntuadas[idx].backdrop_path})`;
  }

  getMejoresAnioPasado() {
    this._ps.getMejoresAnioPasado().subscribe( data => {
      this.mejoresAnioPasado = data;
    });
  }

  getImagenMejoresAnioPasado(idx: number, tamanio: number): string {
    return `url(http://image.tmdb.org/t/p/w${tamanio}${this.mejoresAnioPasado[idx].backdrop_path})`;
  }


  film(id: number) {
    this.router.navigate(['/film', id] );
  }
}
