import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RickMortyService } from 'src/app/services/rick-morty.service';
import { CharacterI } from 'src/app/interfaces/rickMorty.interface';

@Component({
  selector: 'app-rick-morty-character',
  templateUrl: './rick-morty-character.component.html',
  styleUrls: ['./rick-morty-character.component.scss']
})
export class RickMortyCharacterComponent implements OnInit {
  character: CharacterI;

  constructor(private rickMortyService: RickMortyService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(
      params => {
        const id: string = params.get('id');
        this.rickMortyService.getSingleCharacter(id)
          .subscribe(
            (character: CharacterI) => {
              const { id: charId, name, image } = character;

              this.character = {
                id: charId,
                name,
                image
              };
            }
          );

      }
    );
  }

}
