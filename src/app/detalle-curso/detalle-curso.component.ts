import { Component, OnInit } from '@angular/core';
import {Curso} from '../models/curso.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss']
})
export class DetalleCursoComponent implements OnInit {

  cursos: Curso[] = [
    { id: 1, nombre: "Curso Angular", integrantes: [] },
    { id: 2, nombre: "Curso Go", integrantes: [] },
    { id: 3, nombre: "Curso Flutter", integrantes: [] },
    { id: 4, nombre: "Curso React", integrantes: [] },
    { id: 5, nombre: "Curso Java", integrantes: [] },
  ];

  curso: Curso = { id: 0, nombre: '', integrantes: [] };
  id: number = 0;
  constructor(
    public activeRoute: ActivatedRoute
  ) { }
  // http://localhost:4200/curso/1  Params
  // '/curso/:id'

  // http://localhost:4200/curso?id=1&nombre=jdfs Query Params
  // '/curso'

  ngOnInit(): void {
    // this.id = Number(this.activeRoute.snapshot.paramMap.get('id')); // Params
    this.id = Number(this.activeRoute.snapshot.queryParamMap.get('id')); // Query params

    this.curso = this.buscarCurso(this.id);
  }

  buscarCurso(id: number): Curso {
    const curso = this.cursos.find(c => c.id === id);
    return curso || { id: 0, nombre: '', integrantes: [] };
  }
}
