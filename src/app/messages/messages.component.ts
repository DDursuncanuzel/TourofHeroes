import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit {

  /* public dememizin sebebi template'e bağlayamamamızdan dolayı private olunca */
  constructor(public messageService: MessageService) {}

  ngOnInit(){}

}
