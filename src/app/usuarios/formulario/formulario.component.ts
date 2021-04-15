import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from '../../shared/services/usuarios.service';
import {Usuario} from '../../models/usuario.class';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() emisor = new EventEmitter<Usuario | null>();
  @Input() usuario;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal
  ) {
    if (!Boolean(this.usuario)) {
      this.usuario = new Usuario('', '', '');
    }
    this.form = this.formBuilder.group({
      nombre: [this.usuario?.nombre, [Validators.required, Validators.minLength(3),]],
      apellido: [this.usuario?.apellido, [Validators.required, Validators.minLength(3)]],
      email: [this.usuario?.email, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.invalid) {
      alert('Formulario incompleto');
      return
    }
    const values = this.form.value;
    console.log(values);
    const usuario = values as Usuario;
    this.emisor.emit(usuario);
    this.activeModal.dismiss();
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }
}
