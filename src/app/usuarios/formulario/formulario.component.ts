import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UsuariosService} from '../../shared/services/usuarios.service';
import {Usuario} from '../../models/usuario.class';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  @Output() emisor = new EventEmitter<Usuario | null>();
  @Input() usuario: Usuario = new Usuario('', '', '');
  @Input() tipo: string = 'crear'; // 'crear', 'editar', 'ver'

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal
  ) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    console.log(this.usuario);
    this.form = this.formBuilder.group({
      nombre: [{ value: this.usuario?.nombre, disabled: this.tipo === 'ver'}, [Validators.required, Validators.minLength(3),]],
      apellido: [{value: this.usuario?.apellido, disabled: this.tipo === 'ver'}, [Validators.required, Validators.minLength(3)]],
      email: [{value: this.usuario?.email, disabled: this.tipo === 'ver'}, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]]
    });
  }

  submit() {
    if (this.form.invalid) {
      Swal.fire(
        'Error!',
        'Formulario incompleto',
        'error'
      );
      return
    }
    const values = this.form.value;
    const usuario = values as Usuario;
    this.emisor.emit(usuario);
    this.activeModal.dismiss();
    Swal.fire(
      'Guardado correctamente',
      'El usuario ha sido guardado',
      'success'
    )
  }

  cerrarModal() {
    this.activeModal.dismiss();
  }
}
