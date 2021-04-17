import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {SessionStorageService} from './session-storage.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  URL = environment.POST_API_URL;

  constructor(
    private http: HttpClient,
    private storage: SessionStorageService
  ) { }

  consultarPosts() {
    // const token = `${this.storage.obtenerToken()}`;
    // const headers = {
    //   'Content-Type': 'application/json',
    //   'Authorization': token,
    // };
    // return this.http.get(`${this.URL}/cliente/ver-todos`, { headers });
    return this.http.get(`${this.URL}/posts`);
  }
}
