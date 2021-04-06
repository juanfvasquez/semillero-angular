import { Component, OnInit } from '@angular/core';
import {Persona} from '../models/persona.class';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  titulo: string = 'Lista';
  listaPersonas: string[] = ['Juan', 'Pedro', 'Ana'];
  textoInput: string = '';
  listaObjetosPersona: Persona[] = [];
  nombrePersona: string = '';
  apellidoPersona: string = '';
  edadPersona: number = 0;

  constructor() {
    console.log('Este es el constructor');
  }

  ngOnInit(): void {
    console.log('Este es el método OnInit');
  }

  agregarPersona(): void {
    const nuevaPersona = new Persona(
      this.nombrePersona,
      this.apellidoPersona,
      this.edadPersona
    );
    this.listaObjetosPersona.push(nuevaPersona);
  }

  eventoInput(evt: any, input: string) {
    console.log('Evento input tipo ', input, evt.target.value);
    if (input === 'nombre') {
      this.nombrePersona = evt.target.value;
    } else if (input === 'apellido') {
      this.apellidoPersona = evt.target.value;
    } else if (input === 'edad') {
      this.edadPersona = Number(evt.target.value);
    }
  }
}
