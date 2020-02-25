import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-input-service',
  templateUrl: './input-service.component.html',
  styleUrls: ['./input-service.component.scss']
})
export class InputServiceComponent implements OnInit {
  messageList: string[];

  constructor(private messagesService: MessagesService) {
    this.messageList = messagesService.getMessageList();
   }

  ngOnInit() {
  }

}
