import { Injectable } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

interface ErrorValidacion {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadorService {

  constructor() { }

  esExcluido(control: FormControl): ErrorValidacion | null {
    const nombresExcluidos = ['Pedro', 'Pablo', 'José'];
    const nombre = control.value;
    if (nombresExcluidos.includes(nombre)) {
      return { nombreNoPermitido: true };
    }
    return null;
  }

  passwordsIguales(nombrePassword: string, nombrePassword2: string) {
    return (formGroup: FormGroup) => {
      const group = formGroup.controls.passwords as FormGroup;
      const controlPass1 = group.controls[nombrePassword];
      const controlPass2 = group.controls[nombrePassword2];
      if (controlPass1.value === controlPass2.value) {
        controlPass2.setErrors(null);
      } else {
        controlPass2.setErrors({ noCoinciden: true });
      }
    }
  }
}
