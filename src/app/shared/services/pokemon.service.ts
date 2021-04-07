import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Resultado} from '../../models/resultado.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  consultarListaPokemon(url: string): Observable<Resultado> {
    return this.http.get<Resultado>(url);
  }

  consultarPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }
}
