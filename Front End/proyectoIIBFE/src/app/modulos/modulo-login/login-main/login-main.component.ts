import { Component, OnInit } from '@angular/core';
import * as html2canvas from "html2canvas";
import {AutenticacionRestServiceService} from "../../../Servicios/autenticacion-rest/autenticacion-rest-service.service";
import {ConsumidorInterface} from "../../../Interface/consumidor-interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  username:string;
  password:string;
  usuario: ConsumidorInterface;
  codigo: string = "hola Mundo";
  salida: null;

  constructor(
    private readonly _autenticacionUsuario: AutenticacionRestServiceService,
    private readonly _route: Router
    //private readonly _barcodeScan: BarC
  ) { }

  ngOnInit(
  ) {
    if(localStorage.getItem("UsuarioProyecto") != 'null' ){
      this._route.navigate((['/Usuario']));
    }
    //this.pdfDownload();
  }

  /*pdfDownload() {
    /*html2canvas(document.querySelector("#capture")).then(canvas => {
      document.body.appendChild(canvas)
    });
    html2canvas(document.querySelector("#header")).then(function (canvas) {
      var imgData = canvas.toDataURL("image/png");
      document.body.appendChild(canvas);
    });
  }*/

  logearse(){
    const autenticacion$ = this._autenticacionUsuario.Login(this.username,this.password);
    autenticacion$.subscribe(
      (u:ConsumidorInterface[]) =>{
        if(u.length>0) {
          this.usuario = u[0];
          localStorage.setItem('UsuarioProyecto', String(this.usuario.id));
          this._route.navigate((['/Usuario']));
        }else{
          alert("Error en la contrasena o password");
          localStorage.setItem('UsuarioProyecto', null);
        }
      },
      (error) => localStorage.setItem('UsuarioProyecto', null)
    );
  }

  scan(){


  }

}
