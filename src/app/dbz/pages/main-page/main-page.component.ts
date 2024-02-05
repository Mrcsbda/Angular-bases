import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Trunks',
      power: 10
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  //Se puede llamar de cualquier manera, no necesita llamarse de la
  //misma manera que el nombre del evento
  onNewCharacter = (character: Character): void => {
    this.characters.push(character);
  }

  onDeleteCharacter = (index: number): void => {
    this.characters.splice(index, 1);
  }
}
