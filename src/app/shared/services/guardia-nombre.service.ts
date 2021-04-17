import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {SessionStorageService} from './session-storage.service';

@Injectable()
export class GuardiaNombreService implements CanActivate {

  constructor(
    private storage: SessionStorageService,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const {nombresPermitidos} = route.data;
    const nombreActual = this.storage.obtenerNombreUsuario().split(' ')[0];
    console.log(nombreActual, nombresPermitidos);
    return nombresPermitidos.includes(nombreActual.toLowerCase());
  }
}
