import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  guardarToken(token: string) {
    window.sessionStorage.setItem('app-posts-token', token);
  }

  obtenerToken(): string | null {
    return window.sessionStorage.getItem('app-posts-token');
  }

  guardarNombreUsuario(nombre: string) {
    window.sessionStorage.setItem('app-posts-usuario', nombre);
  }

  obtenerNombreUsuario(): string {
    return window.sessionStorage.getItem('app-posts-usuario') || '';
  }

  guardarUsuario(usuario: any) {
    window.sessionStorage.setItem('app-posts-usuario-objeto', JSON.stringify(usuario));
  }

  obtenerUsuario(): any {
    const usuarioJson = window.sessionStorage.getItem('app-posts-usuario-objeto') || '';
    if (!Boolean(usuarioJson)) {
      return null;
    }
    return JSON.parse(usuarioJson);
  }
}
