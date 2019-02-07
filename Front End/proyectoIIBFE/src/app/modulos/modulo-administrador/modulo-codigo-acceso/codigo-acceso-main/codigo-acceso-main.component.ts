import { Component, OnInit } from '@angular/core';
import {AccesoInterface} from "../../../../Interface/acceso-interface";

@Component({
  selector: 'app-codigo-acceso-main',
  templateUrl: './codigo-acceso-main.component.html',
  styleUrls: ['./codigo-acceso-main.component.scss']
})
export class CodigoAccesoMainComponent implements OnInit {

  codigos_accesos: AccesoInterface[] =[];
  constructor() { }

  ngOnInit() {
  }

}
