import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ObjetosAvatarInterface} from "../../Interface/objetos-avatar-interface";

@Component({
  selector: 'app-form-objeto-avatar',
  templateUrl: './form-objeto-avatar.component.html',
  styleUrls: ['./form-objeto-avatar.component.scss']
})
export class FormObjetoAvatarComponent implements OnInit {

  objetoAvatar = <ObjetosAvatarInterface>{};
  nombreButton: string = " ";

  @Input()
  objetoAvatarAux: ObjetosAvatarInterface;

  @Input()
  nombreButtonAux: string;

  @Output()
  formularioValido = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.nombreButton = this.nombreButtonAux;
    if(this.objetoAvatarAux != null){
      this.objetoAvatar = JSON.parse(JSON.stringify(this.objetoAvatarAux));
      //console.log(this.objetoAvatar);
    }

  }

  emitirFormulario(){
    this.formularioValido.emit(this.objetoAvatar);
  }

}
