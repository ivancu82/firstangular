import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-output-service',
  templateUrl: './output-service.component.html',
  styleUrls: ['./output-service.component.scss']
})
export class OutputServiceComponent implements OnInit {
  message: string;

  constructor(private messagesService: MessagesService) {
    this.message = '';
  }

  ngOnInit() {}

  submitMessage(): void {
    this.messagesService.addMessage(this.message);
    this.message = '';
  }
}
