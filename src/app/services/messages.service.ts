import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageList: string[];

  constructor() {
    this.messageList = ['Rocket 🚀', 'Fire 🔥', 'Ghost 👻'];
  }

  addMessage(message: string): void {
    this.messageList.push(message);
  }

  getMessageList(): string[] {
    return this.messageList;
  }
}


