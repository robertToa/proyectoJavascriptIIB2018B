import { Component, OnInit } from '@angular/core';
import * as html2canvas from "html2canvas";

@Component({
  selector: 'app-login-main',
  templateUrl: './login-main.component.html',
  styleUrls: ['./login-main.component.scss']
})
export class LoginMainComponent implements OnInit {

  username:string;
  password:string;
  codigo: string = "hola Mundo";
  salida: null;

  constructor(
    //private readonly _barcodeScan: BarC
  ) { }

  ngOnInit(

  ) {
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
    console.log("se ejecuto correctamente");
  }

  scan(){


  }

}
