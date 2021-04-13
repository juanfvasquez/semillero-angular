import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url = 'https://restcountries.eu/rest/v2/lang/es';
  constructor(
    private http: HttpClient
  ) { }

  consultarPaises() {
    return this.http.get(this.url)
      .pipe(
        map((respuesta) => {
          const paises = respuesta as any[]
          return paises.map(pais => {
            return {nombre: pais.name, codigo: pais.alpha3Code};
          })
        })
      );
  }
}
