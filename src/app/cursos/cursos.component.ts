import { Component, OnInit } from '@angular/core';
import {Curso} from '../models/curso.interface';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { id: 1, nombre: "Curso Angular", integrantes: [] },
    { id: 2, nombre: "Curso Go", integrantes: [] },
    { id: 3, nombre: "Curso Flutter", integrantes: [] },
    { id: 4, nombre: "Curso React", integrantes: [] },
    { id: 5, nombre: "Curso Java", integrantes: [] },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
