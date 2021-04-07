import { Component, OnInit } from '@angular/core';
import {ItemResultado, Resultado} from '../models/resultado.interface';
import {Pokemon} from '../models/Pokemon';
import {PokemonService} from '../shared/services/pokemon.service';

@Component({
  selector: 'app-poke-trello',
  templateUrl: './poke-trello.component.html',
  styleUrls: ['./poke-trello.component.scss']
})
export class PokeTrelloComponent implements OnInit {

  LIMITE = 10;
  paginaActual = 0;
  listaResultados: ItemResultado[] = [];
  listaPokemon: Pokemon[] = [];
  busqueda: string = '';
  intervalo: any;
  urlInicial = `https://pokeapi.co/api/v2/pokemon?limit=${this.LIMITE}&offset=0`;

  constructor(
    private servicioPokemon: PokemonService
  ) { }

  ngOnInit(): void {
    this.llenarLista(this.urlInicial);
  }

  llenarLista(url: string) {
    const respuestaPokemon = (infoPokemon: any) => {
      const nuevoPokemon = new Pokemon(
        infoPokemon.name,
        infoPokemon.height,
        infoPokemon.weight,
        infoPokemon.sprites.front_default
      );
      this.listaPokemon.push(nuevoPokemon);
    };
    this.servicioPokemon.consultarListaPokemon(url)
      .subscribe(resultado => {
        this.listaResultados = [...this.listaResultados, ...resultado.results];
        resultado.results.forEach(r => this.servicioPokemon.consultarPokemon(r.url)
          .subscribe(respuestaPokemon));
        if (Boolean(resultado.next)) {
          this.llenarLista(resultado.next);
        }
      });

    // this.consultarLista(url).then(data => {
    //   this.listaResultados = [...this.listaResultados, ...data.results];
    //   data.results.forEach(r => this.consultarPokemon(r.url));
    //   if (Boolean(data.next)) {
    //     this.llenarLista(data.next);
    //   }
    // });
  }

  consultarLista(url: string) {
    return new Promise<Resultado>((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(responseJson => resolve(responseJson))
    });
  }

  consultarPokemon(url: string) {
    fetch(url).then(response => response.json()).then(infoPokemon => {
      const nuevoPokemon = new Pokemon(
        infoPokemon.name,
        infoPokemon.height,
        infoPokemon.weight,
        infoPokemon.sprites.front_default
      );
      this.listaPokemon.push(nuevoPokemon);
    });
  }

  eventoInput(target: any) {
    if (this.intervalo) {
      clearTimeout(this.intervalo);
    }
    this.intervalo = setTimeout(() => {
      this.busqueda = target.value.trim();
    }, 1000);
  }

  mostrarPorEstado(estado: string) {
    return this.listaPokemon.filter(p => p.estado === estado && p.nombre.toLowerCase().includes(this.busqueda.toLowerCase()));
  }

  eliminarPokemon(): Function {
    return (pokemon: Pokemon) => {
      console.log(this.listaPokemon);
      console.log('# Pokemon (sin eliminar)', this.listaPokemon.length);
      const indice = this.listaPokemon.indexOf(pokemon);
      this.listaPokemon.splice(indice, 1);
      console.log('# Pokemon (después de eliminar)', this.listaPokemon.length);
    }
  }

  eliminar(pokemon: Pokemon) {
    console.log('# Pokemon (sin eliminar)', this.listaPokemon.length);
    const indice = this.listaPokemon.indexOf(pokemon);
    this.listaPokemon.splice(indice, 1);
    console.log('# Pokemon (después de eliminar)', this.listaPokemon.length);
  }
}
