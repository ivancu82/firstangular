import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.scss']
})
export class PipeExampleComponent implements OnInit {
  nameList: string[];
  nameFilter: string;
  isUppercase: boolean;

  constructor() {
    this.isUppercase = false;
    this.nameFilter = '';
    this.nameList = [
      'Kendra',
      'Ivan',
      'Manuel',
      'Aquiles',
      'Cristian',
      'Gustavo',
      'Ángel',
      'Horse Luis',
      'Horse Miguel',
    ];
  }

  ngOnInit() {}

  changeCase() {
    this.isUppercase = !this.isUppercase;
  }
}
