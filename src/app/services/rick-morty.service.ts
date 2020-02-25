import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character/';
  }

  getCharacters(page: number = 1) {
    const newUrl = `${this.baseUrl}?page=${page}`;

    return this.http.get(newUrl);
  }

  getSingleCharacter(id: string) {
    const newUrl = `${this.baseUrl}${id}`;

    return this.http.get(newUrl);
  }
}
