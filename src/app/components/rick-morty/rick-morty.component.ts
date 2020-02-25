import { Component, OnInit } from '@angular/core';

import { RickMortyService } from '../../services/rick-morty.service';
import { CharacterI, ApiRessponseI } from '../../interfaces/rickMorty.interface';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.scss']
})
export class RickMortyComponent implements OnInit {
  characterList: CharacterI[];
  page: number;

  constructor(private rickMortyService: RickMortyService) {
    this.characterList = [];
    this.page = 1;
   }

  ngOnInit() {
    this.loadCharacter(this.page);
  }

  loadCharacter(page: number): void {
    this.rickMortyService.getCharacters(page)
      .subscribe((data: ApiRessponseI) => {
        const mappedCharacters = data.results.map((character: CharacterI) => {
          const { id, name, image, url } = character;
          return { id, name, image, url };
        });

        this.characterList = [
          ...this.characterList,
          ...mappedCharacters,
        ];
      });
  }

  addPage(): void {
    this.page += 1;
    this.loadCharacter(this.page);
  }
}
