import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PaisesService} from '../../shared/services/paises.service';
import {Pais} from '../../models/pais.interface';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {

  usuario = {
    nombre: "",
    apellido: "Vásquez",
    email: "juan@mail.com",
    pais: "",
    genero: ""
  };

  paises: Pais[] = [];

  constructor(
    private paisesService: PaisesService
  ) { }

  ngOnInit(): void {
    this.paisesService.consultarPaises().subscribe(data => {
      this.paises = data;

      this.paises.unshift({ nombre: "Seleccione país", codigo: "" });
    });
  }

  guardar(form: NgForm) {
    console.log(form);
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
  }
}
