import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  template: `<h1 class="center">Pokemons</h1>
  <div class='container'>
  <div class="row">
  <div *ngFor="let pokemon of pokemons" class="col s6 m4">
    <div class="card horizontal" (click)="selectPokemon(pokemon)"
  pkmn-shadow-card>
      <div class="card-image">
        <img [src]="pokemon.picture">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p>{{pokemon.name}}</p>
          <p><small>{{pokemon.created | date:"dd/MM/yyyy"}}</small></p>
        <span *ngFor='let type of pokemon.types' class="{{ type | pokemonTypeColor }}">{{ type }}</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>`
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
