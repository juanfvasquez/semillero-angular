import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeaderComponent} from './header/header.component';
import { BodyComponent } from './body/body.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { ItemComponent } from './item/item.component';
import { EjemploifComponent } from './ejemploif/ejemploif.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaPokemonComponent } from './lista-pokemon/lista-pokemon.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';
import { PokeTrelloComponent } from './poke-trello/poke-trello.component';
import { ItemPokeTrelloComponent } from './item-poke-trello/item-poke-trello.component';
import { MenuComponent } from './menu/menu.component';
import { CursosComponent } from './cursos/cursos.component';
import { VideosComponent } from './videos/videos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';
import { routing } from './routes/app_routes';
import { DetalleCursoComponent } from './detalle-curso/detalle-curso.component';
import { FormCursoComponent } from './form-curso/form-curso.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {EjemplosPipesComponent} from './ejemplos-pipes/ejemplos-pipes.component';
import { LetrasPipe } from './shared/pipes/letras/letras.pipe';
import { TemplateFormsComponent } from './formularios/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './formularios/reactive-forms/reactive-forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListadoComponent } from './usuarios/listado/listado.component';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './posts/login/login.component';
import {InterceptorService} from './shared/services/interceptor.service';
import {GuardiaLoginService} from './shared/services/guardia-login.service';
import {GuardiaNombreService} from './shared/services/guardia-nombre.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    RegistrarComponent,
    ItemComponent,
    EjemploifComponent,
    NavbarComponent,
    ListaPokemonComponent,
    DetallePokemonComponent,
    PokeTrelloComponent,
    ItemPokeTrelloComponent,
    MenuComponent,
    CursosComponent,
    VideosComponent,
    IntegrantesComponent,
    DetalleCursoComponent,
    FormCursoComponent,
    EjemplosPipesComponent,
    LetrasPipe,
    TemplateFormsComponent,
    ReactiveFormsComponent,
    ListadoComponent,
    FormularioComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    GuardiaLoginService,
    GuardiaNombreService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [FormularioComponent]
})
export class AppModule { }
