import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  transform(value: unknown, ...args: string[]): unknown {
    const tipo = args[0];
    const tipoTexto = args[1];
    let salida = this.obtenerSalida(value, tipo);
    if (!tipoTexto) {
      return salida;
    }
    if (tipoTexto === 'uppercase') {
      return salida.toUpperCase();
    }
    if (tipoTexto === 'lowercase') {
      return salida.toLowerCase();
    }
    return salida;
  }

  obtenerSalida(value: unknown, tipo: string) {
    if (tipo === 'es') {
      switch (value) {
        case 1:
          return 'Uno';
        case 2:
          return 'Dos';
        case 3:
          return 'Tres';
        default:
          return 'Cero';
      }
    }
    if (tipo === 'en') {
      switch (value) {
        case 1:
          return 'One';
        case 2:
          return 'Two';
        case 3:
          return 'Three';
        default:
          return 'Zero';
      }
    }
    switch (value) {
      case 1:
        return 'Platino';
      case 2:
        return 'Oro';
      case 3:
        return 'Plata';
      default:
        return 'Bronce';
    }
  }

}
