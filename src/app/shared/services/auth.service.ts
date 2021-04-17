import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionStorageService} from './session-storage.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = environment.POST_API_URL;
  token = '';

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService,
    private router: Router
  ) { }

  login(email: string, password: string): Promise<any> {
    const body = { email, password };
    const headers = {
      'Content-Type': 'application/json'
    }
    return new Promise((resolve, reject) => {
      this.http.post<RespuestaLogin>(`${this.URL}/auth`, JSON.stringify(body), { headers }).subscribe(respuesta => {
        console.log(respuesta)
        this.storage.guardarToken(respuesta.token);
        this.storage.guardarNombreUsuario(respuesta.user.name);
        resolve(respuesta.user);
        this.router.navigate(['/modals']);
      }, error => {
        console.log(error);
        Swal.fire(
          'Error',
          "Ocurrió un error iniciando sesión",
          'error'
        );
        reject(error);
      });
    })
  }
}

interface RespuestaLogin {
  token: string;
  user: any;
}
