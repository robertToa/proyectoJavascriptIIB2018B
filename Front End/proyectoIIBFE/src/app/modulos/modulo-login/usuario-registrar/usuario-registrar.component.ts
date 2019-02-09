import { Component, OnInit } from '@angular/core';
import {PersonaInterface} from "../../../Interface/persona-interface";
import {ConsumidorInterface} from "../../../Interface/consumidor-interface";
import {ConsumidorRestServiceService} from "../../../Servicios/consumidor-rest-service/consumidor-rest-service.service";
import {PersonaRestServiceService} from "../../../Servicios/persona-rest-service/persona-rest-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-usuario-registrar',
  templateUrl: './usuario-registrar.component.html',
  styleUrls: ['./usuario-registrar.component.scss']
})
export class UsuarioRegistrarComponent implements OnInit {

  persona: PersonaInterface = <PersonaInterface>{};
  consumidor: ConsumidorInterface = <ConsumidorInterface>{};

  constructor(
    private readonly _consumidorRest:ConsumidorRestServiceService,
    private readonly _personaRest: PersonaRestServiceService,
    private readonly _roue: Router
  ) { }

  ngOnInit() {
  }

  registrarse(){
    const consumidor$ = this._consumidorRest.findByUsername(this.consumidor.username);
    consumidor$.subscribe(
      (usuarios:ConsumidorInterface[]) => {
        if(usuarios.length>0){
          alert("El usuario ya existe");
        }else{
          const persona$ = this._personaRest.create(this.persona);
          console.log(persona$);
          persona$.subscribe(
            (persona) => {
              this.consumidor.idPersona = persona.id;
              const consumidor$ = this._consumidorRest.create(this.consumidor);
              consumidor$.subscribe(
                (consumidor) => this._roue.navigate((['/login/login']))
              )
            },
            (error) => alert("No se pudo registrar el usuario")
          )
        }
      }
    )
  }
}
