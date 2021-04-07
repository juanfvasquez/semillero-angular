import {Component, OnDestroy, OnInit} from '@angular/core';
import {Curso} from '../models/curso.interface';
import {CursosService} from '../shared/services/cursos.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: Curso[] = [];
  subscripcionCursos = this.servicioCursos.getSubscripcionCursos()
    .subscribe(listaCursos => {
      this.cursos = listaCursos;
    });

  constructor(
    private servicioCursos: CursosService
  ) { }

  ngOnInit(): void {
    this.cursos = this.servicioCursos.getCursos();
  }

  ngOnDestroy() {
    if (this.subscripcionCursos) {
      this.subscripcionCursos.unsubscribe();
    }
  }
}
