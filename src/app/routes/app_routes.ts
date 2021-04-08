import {RouterModule, Routes} from '@angular/router';
import {CursosComponent} from '../cursos/cursos.component';
import {VideosComponent} from '../videos/videos.component';
import {IntegrantesComponent} from '../integrantes/integrantes.component';
import {MenuComponent} from '../menu/menu.component';
import {DetalleCursoComponent} from '../detalle-curso/detalle-curso.component';
import {EjemplosPipesComponent} from '../ejemplos-pipes/ejemplos-pipes.component';

const appRoutes: Routes = [
  { path: '', component: EjemplosPipesComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'videos', component: VideosComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  // { path: 'curso/:id', component: DetalleCursoComponent },
  { path: 'curso', component: DetalleCursoComponent },
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
