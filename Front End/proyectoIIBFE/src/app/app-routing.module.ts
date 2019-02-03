import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginMainComponent} from "./modulos/modulo-login/login-main/login-main.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
