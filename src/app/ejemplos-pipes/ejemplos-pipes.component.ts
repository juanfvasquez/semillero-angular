import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.scss']
})
export class EjemplosPipesComponent implements OnInit {

  datos = [
    { id: 1, nombre: 'Juan Vásquez', monto: 2314123, fecha: new Date(), clientes: 21341, categoria: 1 },
    { id: 2, nombre: 'Pablo Pérez', monto: 7876378.1234, fecha: new Date(), clientes: 88743, categoria: 2 },
    { id: 3, nombre: 'Lina Llanos', monto: 78892123.1234, fecha: new Date(), clientes: 88743, categoria: 3 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
