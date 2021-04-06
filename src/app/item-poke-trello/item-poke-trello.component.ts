import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../models/Pokemon';

@Component({
  selector: 'app-item-poke-trello',
  templateUrl: './item-poke-trello.component.html',
  styleUrls: ['./item-poke-trello.component.scss']
})
export class ItemPokeTrelloComponent implements OnInit {

  @Input() pokemon: Pokemon = new Pokemon("", 0, 0, "", "");
  // @Input() eliminar: Function = () => {};
  @Output() emisor = new EventEmitter<Pokemon>();

  indiceEstado = 0;
  estados = ['libre', 'capturado', 'muerto'];
  constructor() { }

  ngOnInit(): void {
    this.indiceEstado = this.estados.indexOf(this.pokemon.estado);
  }

  clickIzquierda() {
    if (this.indiceEstado <= 0) {
      return;
    }
    this.indiceEstado--;
    this.pokemon.estado = this.estados[this.indiceEstado];
  }

  clickDerecha() {
    if (this.indiceEstado >= this.estados.length) {
      return;
    }
    this.indiceEstado++;
    this.pokemon.estado = this.estados[this.indiceEstado];
    if (this.pokemon.estado === 'muerto') {
      this.emisor.emit(this.pokemon);
    }
  }
}
