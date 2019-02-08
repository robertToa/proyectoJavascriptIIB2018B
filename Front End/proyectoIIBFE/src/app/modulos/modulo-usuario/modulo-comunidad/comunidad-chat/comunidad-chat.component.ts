import { Component, OnInit } from '@angular/core';
import {ComunidadInterface} from "../../../../Interface/comunidad-interface";
import {ChatInterface} from "../../../../Interface/chat-interface";

@Component({
  selector: 'app-comunidad-chat',
  templateUrl: './comunidad-chat.component.html',
  styleUrls: ['./comunidad-chat.component.scss']
})
export class ComunidadChatComponent implements OnInit {

  comunidad: ComunidadInterface = <ComunidadInterface>{};
  chats: ChatInterface[] = [];
  constructor() { }

  ngOnInit() {
    this.comunidad.nombreComunidad = "Comunidad X";
    this.comunidad.id = 1;
  }

}
