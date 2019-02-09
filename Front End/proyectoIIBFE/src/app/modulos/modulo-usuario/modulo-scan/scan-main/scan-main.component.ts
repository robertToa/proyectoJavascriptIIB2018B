import { Component, OnInit } from '@angular/core';
import {ConsumidorInterface} from "../../../../Interface/consumidor-interface";
import {DepartamentoInterface} from "../../../../Interface/departamento-interface";
import {DepartamentoRestServiceService} from "../../../../Servicios/departamento-rest-service/departamento-rest-service.service";
import {UsuarioRegistrarComponent} from "../../../modulo-login/usuario-registrar/usuario-registrar.component";
import {ConsumidorRestServiceService} from "../../../../Servicios/consumidor-rest-service/consumidor-rest-service.service";
import {AccesoConsumidorRestServiceService} from "../../../../Servicios/acceso-consumidor-rest-service/acceso-consumidor-rest-service.service";
import {AccesoInterface} from "../../../../Interface/acceso-interface";

@Component({
  selector: 'app-scan-main',
  templateUrl: './scan-main.component.html',
  styleUrls: ['./scan-main.component.scss']
})
export class ScanMainComponent implements OnInit {

  idUsuarioSeleccion: string = "";
  idDepartamentoSeleccionado:string = "";
  usuarios: ConsumidorInterface[]=[];
  departamentos: DepartamentoInterface[] = [];
  codigo = null;
  constructor(
    private readonly _departamentoRest: DepartamentoRestServiceService,
    private readonly _usuarioRest: ConsumidorRestServiceService,
    private readonly _accesoConsumidorRest: AccesoConsumidorRestServiceService
  ) { }

  ngOnInit() {
    const departamentos$ = this._departamentoRest.findAll();
    departamentos$.subscribe(
      (a:DepartamentoInterface[]) => this.departamentos = a
    )
    const usuarios$ = this._usuarioRest.findAll();
    usuarios$.subscribe(
      (users:ConsumidorInterface[]) => this.usuarios = users
    );


  }

  generarCodigo(){
    if(this.idDepartamentoSeleccionado !="" && this.idDepartamentoSeleccionado!=""){
      this.codigo = this.idDepartamentoSeleccionado+" "+this.idUsuarioSeleccion;
    }else
      alert("Seleccione el departamento y el usuario");
  }
  agregarUsuario(id: string){
    this.idUsuarioSeleccion = id;
  }
  agregarDepartamento(id: string){
    this.idDepartamentoSeleccionado = id;
  }

  guardarCodigo(){
    const objeto:AccesoInterface = <AccesoInterface>{};
    objeto.codigoAcceso = this.codigo;
    objeto.idDepartamento = this.idDepartamentoSeleccionado;
    objeto.idConsumidor = this.idUsuarioSeleccion;
    const generarCodigo$ = this._accesoConsumidorRest.create(objeto);
    generarCodigo$.subscribe(
      (codigo) => {
        const canvas = document.querySelector("canvas") as HTMLCanvasElement;
        const imageData = canvas.toDataURL("image/jpeg").toString();
        const url = imageData.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        location.href = url;
      }
    );
  }

}
