import {RouterModule, Routes} from '@angular/router';
import {CursosComponent} from '../cursos/cursos.component';
import {VideosComponent} from '../videos/videos.component';
import {IntegrantesComponent} from '../integrantes/integrantes.component';
import {MenuComponent} from '../menu/menu.component';
import {DetalleCursoComponent} from '../detalle-curso/detalle-curso.component';
import {EjemplosPipesComponent} from '../ejemplos-pipes/ejemplos-pipes.component';
import {TemplateFormsComponent} from '../formularios/template-forms/template-forms.component';
import {ReactiveFormsComponent} from '../formularios/reactive-forms/reactive-forms.component';
import {ListadoComponent} from '../usuarios/listado/listado.component';
import {FormularioComponent} from '../usuarios/formulario/formulario.component';
import {LoginComponent} from '../posts/login/login.component';
import {GuardiaLoginService} from '../shared/services/guardia-login.service';
import {GuardiaNombreService} from '../shared/services/guardia-nombre.service';
import {StorageComponent} from '../ejemplo-firebase/storage/storage.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent,  },
  { path: 'cursos', component: CursosComponent, canActivate: [GuardiaLoginService] },
  { path: 'videos', component: VideosComponent },
  { path: 'integrantes', component: IntegrantesComponent },
  // { path: 'curso/:id', component: DetalleCursoComponent },
  { path: 'curso', component: DetalleCursoComponent },
  { path: 'template-forms', component: TemplateFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  {
    path: 'modals',
    component: ListadoComponent,
    canActivate: [GuardiaNombreService],
    data: {
      nombresPermitidos: ['pedro', 'pablo', 'juan']
    }
  },
  { path: 'form-modal', component: FormularioComponent },
  { path: 'login', component: LoginComponent},
  { path: 'storage-firebase', component: StorageComponent},
  { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
