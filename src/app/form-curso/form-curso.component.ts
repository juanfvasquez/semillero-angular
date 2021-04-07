import { Component, OnInit } from '@angular/core';
import {CursosService} from '../shared/services/cursos.service';

@Component({
  selector: 'app-form-curso',
  templateUrl: './form-curso.component.html',
  styleUrls: ['./form-curso.component.scss']
})
export class FormCursoComponent implements OnInit {

  nombre: string = "";

  constructor(
    private servicioCursos: CursosService
  ) { }

  ngOnInit(): void {
  }

  eventoInput(evt: any) {
    this.nombre = evt.target.value.trim();
  }

  crearCurso() {
    if (this.nombre.length < 5) {
      alert("El nombre es muy corto");
      return;
    }
    const maxId = Math.max(...this.servicioCursos.getCursos().map(c => c.id));
    const curso = { id: maxId + 1, nombre: this.nombre, integrantes: [] };
    const nuevaLista = [...this.servicioCursos.getCursos(), curso];
    this.servicioCursos.setCursos(nuevaLista);
    this.nombre = "";
  }
}
