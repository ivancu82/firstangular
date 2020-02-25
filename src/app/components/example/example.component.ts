import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  name: string;
  showName: boolean;
  redColor: boolean;
  numberArray: number[];

  constructor() {
    console.log('Construyendo');
    console.log(this.name);
    this.name = 'David';
    this.showName = true;
    this.redColor = false;
    this.numberArray = [1, 2, 3, 4, 5];
  }

  ngOnInit() {
    console.log('Iniciando');
    console.log(this.name);
  }

  toggleVisibility(): void {
    this.showName = !this.showName;
  }

  changeColor(): void {
    this.redColor = !this.redColor;
  }
}
