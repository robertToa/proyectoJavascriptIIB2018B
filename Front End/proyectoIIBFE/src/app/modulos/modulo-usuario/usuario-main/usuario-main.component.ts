import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../Interface/consumidor-interface";

@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',
  styleUrls: ['./usuario-main.component.scss']
})
export class UsuarioMainComponent implements OnInit {

  usuario: ConsumidorInterface = <ConsumidorInterface>{};
  constructor() { }

  ngOnInit() {
    this.usuario.username = "robert";
  }

}
