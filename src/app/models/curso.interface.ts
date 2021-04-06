import {Integrante} from './integrante.interface';

export interface Curso {
  id: number;
  nombre: string;
  integrantes: Integrante[];
}
