import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { PeliculasService } from './services/peliculas.service';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SearchComponent } from './components/search/search.component';
import { FilmComponent } from './components/film/film.component';
import { APP_ROUTES } from './app.routes';
import { NoImagenPipe } from './pipes/no-imagen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    CategoriesComponent,
    SearchComponent,
    FilmComponent,
    NoImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    APP_ROUTES
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
