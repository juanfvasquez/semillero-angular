import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../models/Pokemon';
import {ItemResultado, Resultado} from '../models/resultado.interface';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {

  LIMITE = 10;
  paginaActual = 0;
  listaPokemon: ItemResultado[] = [];
  listaParaMostrar: ItemResultado[] = [];
  vistaActual = 1;
  textoFiltro = '';
  seleccion: Pokemon = new Pokemon('', 0, 0, '');
  mostrarDetalles = false;
  cargando = false;

  constructor() { }

  async ngOnInit() {
    this.llenarLista();
  }

  async llenarLista() {
    const data = await this.consultarLista(this.paginaActual);
    this.listaPokemon = data.results;
    this.listaParaMostrar = this.listaPokemon;
  }

  consultarLista(pagina: number) {
    return new Promise<Resultado>((resolve, reject) => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.LIMITE}&offset=${pagina * this.LIMITE}`)
        .then(response => response.json())
        .then(responseJson => resolve(responseJson))
    });
  }

  filtro(evento: any) {
    this.textoFiltro = evento.target.value.trim();
  }

  cambiarVista(vista: number) {
    this.vistaActual = vista;
  }

  buscar() {
    this.listaParaMostrar = this.listaPokemon.filter(i => i.name.includes(this.textoFiltro));
  }

  consultarPokemon(url: string) {
    this.cargando = true;
    fetch(url).then(response => response.json()).then(infoPokemon => {
      const nuevoPokemon = new Pokemon(
        infoPokemon.name,
        infoPokemon.height,
        infoPokemon.weight,
        infoPokemon.sprites.front_default
      );
      this.seleccion = nuevoPokemon;
      this.cargando = false;
    })
  }

  seleccionar(resultado: ItemResultado) {
    this.seleccion = new Pokemon('', 0, 0, '');
    this.consultarPokemon(resultado.url);
    this.mostrarDetalles = true;
  }

  siguientePagina() {
    this.paginaActual++;
    this.llenarLista();
  }

  anteriorPagina() {
    this.paginaActual--;
    this.llenarLista();
  }
}
