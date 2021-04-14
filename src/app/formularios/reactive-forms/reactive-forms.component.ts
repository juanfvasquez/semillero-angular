import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ValidadorService} from '../../shared/services/validador.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servicioValidacion: ValidadorService
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [
        Validators.required,
        Validators.minLength(3),
        this.servicioValidacion.esExcluido
      ]],
      apellido: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$') ]],
      passwords: this.formBuilder.group({
        password: ['', Validators.required],
        password2: ['', Validators.required],
      })
    }, {
      validators: this.servicioValidacion.passwordsIguales('password', 'password2')
    });
  }

  ngOnInit(): void {
  }

  guardar() {
    console.log(this.form);
    console.log(this.pass2NoValido);
  }

  get pass2NoValido() {
    // const pass = this.form.get('passwords.password')?.value;
    // const pass2 = this.form.get('passwords.password2')?.value;
    //
    // return Boolean(pass) && Boolean(pass2) && pass !== pass2;
    const group = this.form.controls.passwords as FormGroup;
    const pass = group.controls.password?.value;
    const pass2 = group.controls.password2?.value;
    return Boolean(pass) && Boolean(pass2) && pass !== pass2;
  }
}
