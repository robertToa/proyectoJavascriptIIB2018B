import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";
import {ActivatedRoute, Router} from "@angular/router";
import {ConsumidorRestServiceService} from "../../../../Servicios/consumidor-rest-service/consumidor-rest-service.service";

@Component({
  selector: 'app-consumidor-main',
  templateUrl: './consumidor-main.component.html',
  styleUrls: ['./consumidor-main.component.scss']
})
export class ConsumidorMainComponent implements OnInit {

  usuarios: ConsumidorInterface[] = [];
  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _consumidorRset:ConsumidorRestServiceService,
    private readonly _route: Router,
  ) { }

  ngOnInit() {
    const evento$ = this._consumidorRset.findAll();
    evento$
      .subscribe(
        (objetos: ConsumidorInterface[]) => {
          this.usuarios = objetos;
        }
      );
  }

}
