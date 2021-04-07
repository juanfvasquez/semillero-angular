import { Component, OnInit } from '@angular/core';
import {Curso} from '../models/curso.interface';
import {ActivatedRoute} from '@angular/router';
import {CursosService} from '../shared/services/cursos.service';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.scss']
})
export class DetalleCursoComponent implements OnInit {

  cursos: Curso[] = [];

  curso: Curso = { id: 0, nombre: '', integrantes: [] };
  id: number = 0;

  constructor(
    private activeRoute: ActivatedRoute,
    private servicioCursos: CursosService
  ) { }
  // http://localhost:4200/curso/1  Params
  // '/curso/:id'

  // http://localhost:4200/curso?id=1&nombre=jdfs Query Params
  // '/curso'

  ngOnInit(): void {
    this.cursos = this.servicioCursos.getCursos();

    // this.id = Number(this.activeRoute.snapshot.paramMap.get('id')); // Params
    this.id = Number(this.activeRoute.snapshot.queryParamMap.get('id')); // Query params

    this.curso = this.buscarCurso(this.id);
  }

  buscarCurso(id: number): Curso {
    const curso = this.cursos.find(c => c.id === id);
    return curso || { id: 0, nombre: '', integrantes: [] };
  }
}
