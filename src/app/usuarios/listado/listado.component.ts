import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../shared/services/usuarios.service';
import {Usuario} from '../../models/usuario.class';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormularioComponent} from '../formulario/formulario.component';

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

  editar(usuario: Usuario) {
    const modalRef = this.modal.open(FormularioComponent,
      { backdrop: 'static', size: 'lg' });
    console.log(usuario);
    modalRef.componentInstance.usuario = usuario;
  }

  eliminarUsuario(indice: number) {
    this.listaUsuarios.splice(indice, 1);
  }
}
