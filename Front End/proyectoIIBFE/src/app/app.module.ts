import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainComponent } from './modulos/modulo-login/login-main/login-main.component';
import {FormsModule} from "@angular/forms";
import { UsuarioRegistrarComponent } from './modulos/modulo-login/usuario-registrar/usuario-registrar.component';
import { UsuarioLoginComponent } from './modulos/modulo-login/usuario-login/usuario-login.component';
import { UsuarioForgetpasswordComponent } from './modulos/modulo-login/usuario-forgetpassword/usuario-forgetpassword.component';
import { UsuarioMainComponent } from './modulos/modulo-usuario/usuario-main/usuario-main.component';
import { ComunidadMainComponent } from './modulos/modulo-usuario/modulo-comunidad/comunidad-main/comunidad-main.component';
import { ComunidadChatComponent } from './modulos/modulo-usuario/modulo-comunidad/comunidad-chat/comunidad-chat.component';
import { DepartamentoMainComponent } from './modulos/modulo-usuario/modulo-departamento/departamento-main/departamento-main.component';
import { MiembroMainComponent } from './modulos/modulo-usuario/modulo-miembro/miembro-main/miembro-main.component';
import { MiembroAvatarComponent } from './modulos/modulo-usuario/modulo-miembro/miembro-avatar/miembro-avatar.component';
import { PerfilMainComponent } from './modulos/modulo-usuario/modulo-perfil/perfil-main/perfil-main.component';
import { ScanMainComponent } from './modulos/modulo-usuario/modulo-scan/scan-main/scan-main.component';
import { NgxQRCodeModule} from "ngx-qrcode2";
import { AdministradorLoginComponent } from './modulos/modulo-administrador/administrador-login/administrador-login.component';
import { AdministradorMainComponent } from './modulos/modulo-administrador/administrador-main/administrador-main.component';
import { AccesorioMainComponent } from './modulos/modulo-administrador/modulo-accesorio/accesorio-main/accesorio-main.component';
import { AccesorioCrearComponent } from './modulos/modulo-administrador/modulo-accesorio/accesorio-crear/accesorio-crear.component';
import { AccesorioActualizarComponent } from './modulos/modulo-administrador/modulo-accesorio/accesorio-actualizar/accesorio-actualizar.component';
import { AccesorioVosualizarComponent } from './modulos/modulo-administrador/modulo-accesorio/accesorio-vosualizar/accesorio-vosualizar.component';
import { CabelloMainComponent } from './modulos/modulo-administrador/modulo-cabello/cabello-main/cabello-main.component';
import { CabelloVisualizarComponent } from './modulos/modulo-administrador/modulo-cabello/cabello-visualizar/cabello-visualizar.component';
import { CabelloCrearComponent } from './modulos/modulo-administrador/modulo-cabello/cabello-crear/cabello-crear.component';
import { CabelloActualizarComponent } from './modulos/modulo-administrador/modulo-cabello/cabello-actualizar/cabello-actualizar.component';
import { RostroMainComponent } from './modulos/modulo-administrador/modulo-rostro/rostro-main/rostro-main.component';
import { RostroActualizarComponent } from './modulos/modulo-administrador/modulo-rostro/rostro-actualizar/rostro-actualizar.component';
import { RostroVisualizarComponent } from './modulos/modulo-administrador/modulo-rostro/rostro-visualizar/rostro-visualizar.component';
import { RostroCrearComponent } from './modulos/modulo-administrador/modulo-rostro/rostro-crear/rostro-crear.component';
import { VestimentaMainComponent } from './modulos/modulo-administrador/modulo-vestimenta/vestimenta-main/vestimenta-main.component';
import { VestimentaCrearComponent } from './modulos/modulo-administrador/modulo-vestimenta/vestimenta-crear/vestimenta-crear.component';
import { VestimentaVisualizarComponent } from './modulos/modulo-administrador/modulo-vestimenta/vestimenta-visualizar/vestimenta-visualizar.component';
import { VestimentaActualizarComponent } from './modulos/modulo-administrador/modulo-vestimenta/vestimenta-actualizar/vestimenta-actualizar.component';
import { CodigoAccesoMainComponent } from './modulos/modulo-administrador/modulo-codigo-acceso/codigo-acceso-main/codigo-acceso-main.component';
import { ComunidadVisualizarComponent } from './modulos/modulo-administrador/modulo-comunidad/comunidad-visualizar/comunidad-visualizar.component';
import { ComunidadVisualizarConsumidoresComponent } from './modulos/modulo-administrador/modulo-comunidad/comunidad-visualizar-consumidores/comunidad-visualizar-consumidores.component';
import { DepartamentoGestionComponent } from './modulos/modulo-administrador/modulo-departamento/departamento-gestion/departamento-gestion.component';
import { DepartamentoCrearComponent } from './modulos/modulo-administrador/modulo-departamento/departamento-crear/departamento-crear.component';
import { DepartamentoVisualizarComponent } from './modulos/modulo-administrador/modulo-departamento/departamento-visualizar/departamento-visualizar.component';
import { DepartamentoActualizarComponent } from './modulos/modulo-administrador/modulo-departamento/departamento-actualizar/departamento-actualizar.component';
import { FormObjetoAvatarComponent } from './Componentes/form-objeto-avatar/form-objeto-avatar.component';
import { ConsumidorMainComponent } from './modulos/modulo-administrador/modulo-consumidor/consumidor-main/consumidor-main.component';
import { DepartamentoMainAdministradorComponent } from './modulos/modulo-administrador/modulo-departamento/departamento-main-administrador/departamento-main-administrador.component';
import { FormDepartamentoComponent } from './Componentes/form-departamento/form-departamento.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginMainComponent,
    UsuarioRegistrarComponent,
    UsuarioLoginComponent,
    UsuarioForgetpasswordComponent,
    UsuarioMainComponent,
    ComunidadMainComponent,
    ComunidadChatComponent,
    DepartamentoMainComponent,
    MiembroMainComponent,
    MiembroAvatarComponent,
    PerfilMainComponent,
    ScanMainComponent,
    AdministradorLoginComponent,
    AdministradorMainComponent,
    AccesorioMainComponent,
    AccesorioCrearComponent,
    AccesorioActualizarComponent,
    AccesorioVosualizarComponent,
    CabelloMainComponent,
    CabelloVisualizarComponent,
    CabelloCrearComponent,
    CabelloActualizarComponent,
    RostroMainComponent,
    RostroActualizarComponent,
    RostroVisualizarComponent,
    RostroCrearComponent,
    VestimentaMainComponent,
    VestimentaCrearComponent,
    VestimentaVisualizarComponent,
    VestimentaActualizarComponent,
    CodigoAccesoMainComponent,
    ComunidadVisualizarComponent,
    ComunidadVisualizarConsumidoresComponent,
    DepartamentoGestionComponent,
    DepartamentoCrearComponent,
    DepartamentoVisualizarComponent,
    DepartamentoActualizarComponent,
    FormObjetoAvatarComponent,
    ConsumidorMainComponent,
    DepartamentoMainAdministradorComponent,
    FormDepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
