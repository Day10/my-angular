import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // 这里的MessageService必须是public,因为要把MessageService保定到messages.components.ts中，
  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
