import {Component, Input, OnInit} from '@angular/core';
import {Persona} from '../models/persona.class';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() persona: string = 'Por defecto';
  @Input() texto: string = 'Texto por defecto';
  @Input() objetoPersona: Persona = new Persona('', '', 0);

  constructor() { }

  ngOnInit(): void {
  }

}
