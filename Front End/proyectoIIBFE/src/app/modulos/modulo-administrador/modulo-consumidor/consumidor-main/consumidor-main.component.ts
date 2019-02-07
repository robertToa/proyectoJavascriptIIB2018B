import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";

@Component({
  selector: 'app-consumidor-main',
  templateUrl: './consumidor-main.component.html',
  styleUrls: ['./consumidor-main.component.scss']
})
export class ConsumidorMainComponent implements OnInit {

  usuarios: ConsumidorInterface[] = [];
  constructor() { }

  ngOnInit() {
  }

}
