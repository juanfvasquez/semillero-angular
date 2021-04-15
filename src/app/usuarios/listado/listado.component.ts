import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../shared/services/usuarios.service';
import {Usuario} from '../../models/usuario.class';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormularioComponent} from '../formulario/formulario.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listaUsuarios: Usuario[] = [];
  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }

  crear() {
    const modalRef = this.modal.open(FormularioComponent,
      { backdrop: 'static', size: 'lg' });
    modalRef.componentInstance.emisor.subscribe((dato: Usuario | null) => {
      if (Boolean(dato)) {
        const usuario = dato as Usuario;
        this.listaUsuarios.push(usuario);
      }
    });
  }

  editar(usuario: Usuario, indice: number) {
    const modalRef = this.modal.open(FormularioComponent,
      { backdrop: 'static', size: 'lg', windowClass: 'modal' });
    modalRef.componentInstance.usuario = usuario;
    modalRef.componentInstance.tipo = 'editar';
    modalRef.componentInstance.emisor.subscribe((dato: Usuario | null) => {
      if (Boolean(dato)) {
        this.listaUsuarios[indice] = dato as Usuario;
      }
    });
  }

  ver(usuario: Usuario) {
    const modalRef = this.modal.open(FormularioComponent,
      { backdrop: 'static', size: 'lg', windowClass: 'modal' });
    modalRef.componentInstance.usuario = usuario;
    modalRef.componentInstance.tipo = 'ver';
  }

  eliminarUsuario(indice: number) {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el usuario?',
      text: 'No podrá recuperar los datos',
      icon: 'question',
      showCancelButton: true,
      showConfirmButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.listaUsuarios.splice(indice, 1);
        Swal.fire(
          'Eliminado correctamente',
          'El usuario fue eliminado',
          'success'
        )
      }
    });
  }
}
