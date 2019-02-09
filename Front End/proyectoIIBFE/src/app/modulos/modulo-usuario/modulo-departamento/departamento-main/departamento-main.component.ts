import { Component, OnInit } from '@angular/core';
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {DepartamentoRestServiceService} from "../../../../Servicios/departamento-rest-service/departamento-rest-service.service";
import {ConsumidorDepartamentoInterface} from "../../../../Interface/consumidor-departamento-interface";
import {ConsuDepartRestServiceService} from "../../../../Servicios/consu-depart-rest-service/consu-depart-rest-service.service";
import {map} from "rxjs/operators";
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";

@Component({
  selector: 'app-departamento-main',
  templateUrl: './departamento-main.component.html',
  styleUrls: ['./departamento-main.component.scss']
})
export class DepartamentoMainComponent implements OnInit {

  departamentos: DepartamentoInterface[] = [];
  departamentosAux: DepartamentoInterface[] = [];
  departamentosNoUsuario: DepartamentoInterface[] = [];
  departamentoNoUsuarioAux: DepartamentoInterface[] = [];
  textoBuscarDepa: string = "";
  textoBuscarNoDepa: string = "";
  idDepart: number = 0;
  numDepart: number = 0;
  constructor(
    private readonly _departamentoRest: DepartamentoRestServiceService,
    private readonly _consudepartRest: ConsuDepartRestServiceService
  ) { }

  ngOnInit() {
    const obser$ = this._departamentoRest.findAll();
    obser$
      .subscribe(
        (objetos: DepartamentoInterface[]) => {
          this.departamentosNoUsuario = objetos;
          this.departamentoNoUsuarioAux = objetos;
        }
      );
    const deparConsu$ = this._consudepartRest.findAll();
    deparConsu$
      .subscribe(
        (objetos: ConsumidorDepartamentoInterface[]) => {
          const obj = objetos.filter(
            a => {
              if(a.habilitarDepartamento === true){
                const b = <ConsumidorInterface> a.idConsumidor;
                try{
                  const usuario = localStorage.getItem("UsuarioProyecto");
                  if(b.id == usuario){
                    return a;
                  }
                }catch (e) {

                }
              }
            }
          );

          this.departamentos = obj.map(o => <DepartamentoInterface>o.idDepartamento);
          this.departamentosAux = obj.map(o => <DepartamentoInterface>o.idDepartamento);
          //console.log(this.departamentos);
          /*this.departamentos.forEach(
            (elemento) =>{

              this.departamentosNoUsuario.splice(this.departamentosNoUsuario.findIndex( d=> d.id === elemento.id),1);
              this.departamentoNoUsuarioAux.splice(this.departamentoNoUsuarioAux.findIndex( d=> d.id === elemento.id),1);
            }
          );*/
        }
      );
  }

  BuscarDepatamento(){

  }
  BuscarDepartamentoNoUsuario(){

  }

  EncenderLuces(){

  }

  SeleccionDepartamento(id: number, num: number){
    this.idDepart = id;
    this.numDepart = num;
    console.log(this.idDepart);
  }

  SolicitarAccesoDepartamento(id: number | string){

  }
  funcion(id: number){
    if(this.departamentos.length<1 || this.departamentos.findIndex(a=> a.id!=id)!=-1)
      return true;
    else
      return false;
  }
}
