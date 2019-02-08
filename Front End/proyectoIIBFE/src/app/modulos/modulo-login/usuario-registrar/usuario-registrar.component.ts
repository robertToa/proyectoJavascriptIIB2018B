import { Component, OnInit } from '@angular/core';
import {PersonaInterface} from "../../../Interface/persona-interface";
import {ConsumidorInterface} from "../../../Interface/consumidor-interface";

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.scss']
})
export class UsuarioRegistrarComponent implements OnInit {

  persona: PersonaInterface = <PersonaInterface>{};
  consumidor: ConsumidorInterface = <ConsumidorInterface>{};
  constructor() { }

  ngOnInit() {
  }

  registrarse(){

  }
}
