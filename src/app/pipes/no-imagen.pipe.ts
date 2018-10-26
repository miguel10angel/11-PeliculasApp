import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {


  transform(pelicula: any, tamanio: number, search?: boolean): string {
    if ( pelicula.backdrop_path ) {
      return `http://image.tmdb.org/t/p/w${tamanio}${pelicula.backdrop_path}`;
    } else {
      if ( search ) {
        if ( pelicula.poster_path ) {
          return `http://image.tmdb.org/t/p/w${tamanio}${pelicula.poster_path}`;

        } else {
          return 'assets/noimage.png';
        }
      } else {
        return '';
      }
    }

  }
}
