import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miembro-avatar',
  templateUrl: './miembro-avatar.component.html',
  styleUrls: ['./miembro-avatar.component.scss']
})
export class MiembroAvatarComponent implements OnInit {

  imagen:string ="";
  constructor() { }

  ngOnInit() {
    this.imagen = "http://190.96.111.126/bn/recursos/avatar/avatar2.png";
  }

}
