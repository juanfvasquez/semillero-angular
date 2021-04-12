import {Component, OnDestroy, OnInit} from '@angular/core';
import {Curso} from '../models/curso.interface';
import {CursosService} from '../shared/services/cursos.service';
import {Router} from '@angular/router';

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
    private servicioCursos: CursosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cursos = this.servicioCursos.getCursos();
  }

  ngOnDestroy() {
    if (this.subscripcionCursos) {
      this.subscripcionCursos.unsubscribe();
    }
  }

  navegar(id: number) {
    this.router.navigate([`/curso`], { queryParams: { id } });
  }
}
