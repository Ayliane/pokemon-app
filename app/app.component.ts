import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  template: `<h1>Pokemons Shop</h1>
  <ul>
  <li *ngFor="let pokemon of pokemons">{{ pokemon.name }}</li>
  </ul>`
})
export class AppComponent implements OnInit {

  pokemons: Pokemon[] = null;

  ngOnInit() {
    this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) {
    console.log("Vous avez cliqué sur " + pokemon.name);
  }
}
