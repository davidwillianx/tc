import { Component } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public pokemons: Pokemon[] = [
    { name: 'Pikachu', selected: false },
    { name: 'Squirtle', selected: false },
    { name: 'Bulbasaur', selected: false },
    { name: 'Charmander', selected: false },
    { name: 'Charizard', selected: false }
  ];

  public pokemonsChoosen: Pokemon[] = [];

  constructor(
    private dragulaService: DragulaService
  ) {
    this.dragulaService.drag('pokemon')
      .subscribe(({ name, el, source }) => {
      });

    this.dragulaService.dropModel('pokemon')
      .subscribe(({item, target}) => {
        this.pokemonsChoosen.push(item);
        this.pokemons = this.pokemons.filter((pokemon: Pokemon) => pokemon.name !== item.name);
        console.log(this.pokemons);
        console.log(item);
      });

  }

}

export interface Pokemon {
  name: string;
  selected: boolean;
}
