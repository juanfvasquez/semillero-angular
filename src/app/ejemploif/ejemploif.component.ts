import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemploif',
  templateUrl: './ejemploif.component.html',
  styleUrls: ['./ejemploif.component.scss']
})
export class EjemploifComponent implements OnInit {

  seleccion: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  clickBoton(seleccion: number) {
    this.seleccion = seleccion;
  }
}
