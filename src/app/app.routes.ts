import {Routes, RouterModule, Router} from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FilmComponent } from './components/film/film.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';

const RUTAS: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'categories',
        component: CategoriesComponent
    },
    {
        path: 'film/:id',
        component: FilmComponent
    },
    {
        path: '**',
        pathMatch: 'full', redirectTo: 'categories'
    }
];


export const APP_ROUTES = RouterModule.forRoot(RUTAS);
