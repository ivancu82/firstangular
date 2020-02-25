import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {
  @Output() messageEmitter;
  message: string;

  constructor() {
    this.messageEmitter = new EventEmitter<string>();
    this.message = '';
   }

  ngOnInit() {
  }

  sendMessage(): void {
    if (this.message.length) {
      this.messageEmitter.emit(this.message);
      this.message = '';
    }
  }

}
