import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ObjetosAvatarInterface} from "../../Interface/objetos-avatar-interface";
import {DepartamentoInterface} from "../../Interface/departamento-interface";

@Component({
  selector: 'app-form-departamento',
  templateUrl: './form-departamento.component.html',
  styleUrls: ['./form-departamento.component.scss']
})
export class FormDepartamentoComponent implements OnInit {

  departamento = <DepartamentoInterface>{};
  nombreButton: string = " ";

  @Input()
  departamentoAux: DepartamentoInterface;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.departamentoAux != null)
      this.departamento = JSON.parse(JSON.stringify(this.departamentoAux));
  }

  emitirFormulario(){
    var errores: string ="";
    if(this.departamento.numeroDepartamento<0 || this.departamento.numeroDepartamento>60){
      errores += "/n Departamento entre[0-60]"
    }
    if(this.departamento.pisoDepartamento<0 || this.departamento.pisoDepartamento>5){
      errores += "/n Solo existe 5 pisos"
    }
    if(errores ===""){
      this.formularioValido.emit(this.departamento);
    }else{
      alert(errores);
    }

  }
}
