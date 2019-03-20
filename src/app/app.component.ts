import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router ) {
    /*this._ps.getPopulares().subscribe( data => console.log(data));*/
  }
  title = 'peliculasapp';

  buscar( termino: string ) {
    this.router.navigate(['/search', termino]);
  }
}
