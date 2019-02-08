import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginMainComponent} from "./modulos/modulo-login/login-main/login-main.component";
import {AdministradorLoginComponent} from "./modulos/modulo-administrador/administrador-login/administrador-login.component";
import {AdministradorMainComponent} from "./modulos/modulo-administrador/administrador-main/administrador-main.component";
import {AccesorioMainComponent} from "./modulos/modulo-administrador/modulo-accesorio/accesorio-main/accesorio-main.component";
import {AccesorioVosualizarComponent} from "./modulos/modulo-administrador/modulo-accesorio/accesorio-vosualizar/accesorio-vosualizar.component";
import {AccesorioCrearComponent} from "./modulos/modulo-administrador/modulo-accesorio/accesorio-crear/accesorio-crear.component";
import {AccesorioActualizarComponent} from "./modulos/modulo-administrador/modulo-accesorio/accesorio-actualizar/accesorio-actualizar.component";
import {CabelloMainComponent} from "./modulos/modulo-administrador/modulo-cabello/cabello-main/cabello-main.component";
import {CabelloVisualizarComponent} from "./modulos/modulo-administrador/modulo-cabello/cabello-visualizar/cabello-visualizar.component";
import {CabelloCrearComponent} from "./modulos/modulo-administrador/modulo-cabello/cabello-crear/cabello-crear.component";
import {CabelloActualizarComponent} from "./modulos/modulo-administrador/modulo-cabello/cabello-actualizar/cabello-actualizar.component";
import {RostroMainComponent} from "./modulos/modulo-administrador/modulo-rostro/rostro-main/rostro-main.component";
import {RostroVisualizarComponent} from "./modulos/modulo-administrador/modulo-rostro/rostro-visualizar/rostro-visualizar.component";
import {RostroCrearComponent} from "./modulos/modulo-administrador/modulo-rostro/rostro-crear/rostro-crear.component";
import {RostroActualizarComponent} from "./modulos/modulo-administrador/modulo-rostro/rostro-actualizar/rostro-actualizar.component";
import {VestimentaMainComponent} from "./modulos/modulo-administrador/modulo-vestimenta/vestimenta-main/vestimenta-main.component";
import {VestimentaVisualizarComponent} from "./modulos/modulo-administrador/modulo-vestimenta/vestimenta-visualizar/vestimenta-visualizar.component";
import {VestimentaCrearComponent} from "./modulos/modulo-administrador/modulo-vestimenta/vestimenta-crear/vestimenta-crear.component";
import {VestimentaActualizarComponent} from "./modulos/modulo-administrador/modulo-vestimenta/vestimenta-actualizar/vestimenta-actualizar.component";
import {CodigoAccesoMainComponent} from "./modulos/modulo-administrador/modulo-codigo-acceso/codigo-acceso-main/codigo-acceso-main.component";
import {ComunidadVisualizarComponent} from "./modulos/modulo-administrador/modulo-comunidad/comunidad-visualizar/comunidad-visualizar.component";
import {ComunidadVisualizarConsumidoresComponent} from "./modulos/modulo-administrador/modulo-comunidad/comunidad-visualizar-consumidores/comunidad-visualizar-consumidores.component";
import {ConsumidorMainComponent} from "./modulos/modulo-administrador/modulo-consumidor/consumidor-main/consumidor-main.component";
import {DepartamentoGestionComponent} from "./modulos/modulo-administrador/modulo-departamento/departamento-gestion/departamento-gestion.component";
import {DepartamentoCrearComponent} from "./modulos/modulo-administrador/modulo-departamento/departamento-crear/departamento-crear.component";
import {DepartamentoVisualizarComponent} from "./modulos/modulo-administrador/modulo-departamento/departamento-visualizar/departamento-visualizar.component";
import {DepartamentoActualizarComponent} from "./modulos/modulo-administrador/modulo-departamento/departamento-actualizar/departamento-actualizar.component";
import {DepartamentoMainAdministradorComponent} from "./modulos/modulo-administrador/modulo-departamento/departamento-main-administrador/departamento-main-administrador.component";
import {UsuarioRegistrarComponent} from "./modulos/modulo-login/usuario-registrar/usuario-registrar.component";
import {UsuarioLoginComponent} from "./modulos/modulo-login/usuario-login/usuario-login.component";
import {UsuarioForgetpasswordComponent} from "./modulos/modulo-login/usuario-forgetpassword/usuario-forgetpassword.component";
import {UsuarioMainComponent} from "./modulos/modulo-usuario/usuario-main/usuario-main.component";
import {PerfilMainComponent} from "./modulos/modulo-usuario/modulo-perfil/perfil-main/perfil-main.component";
import {ScanMainComponent} from "./modulos/modulo-usuario/modulo-scan/scan-main/scan-main.component";
import {ComunidadMainComponent} from "./modulos/modulo-usuario/modulo-comunidad/comunidad-main/comunidad-main.component";
import {ComunidadChatComponent} from "./modulos/modulo-usuario/modulo-comunidad/comunidad-chat/comunidad-chat.component";
import {MiembroMainComponent} from "./modulos/modulo-usuario/modulo-miembro/miembro-main/miembro-main.component";
import {MiembroAvatarComponent} from "./modulos/modulo-usuario/modulo-miembro/miembro-avatar/miembro-avatar.component";
import {DepartamentoMainComponent} from "./modulos/modulo-usuario/modulo-departamento/departamento-main/departamento-main.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginMainComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'registrar'
      },
      {
        path: 'registrar',
        component: UsuarioRegistrarComponent
      },
      {
        path: 'login',
        component: UsuarioLoginComponent
      },
      {
        path: 'forgetpassword',
        component: UsuarioForgetpasswordComponent
      }
    ]
  },
  {
    path: 'AdministradorLogin',
    component: AdministradorLoginComponent
  },
  {
    path: 'Administrador',
    component: AdministradorMainComponent,
    children: [
      {
        path:'',
        pathMatch:'full',
        redirectTo: 'usuarios'
      },
      {
        path: 'usuarios',
        component: ConsumidorMainComponent
      },
      {
        path: 'gestionAccesorio',
        component: AccesorioMainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'visualizar'
          },
          {
            path: 'visualizar',
            component: AccesorioVosualizarComponent
          },
          {
            path: 'crear',
            component: AccesorioCrearComponent
          },
          {
            path: 'actualizar/:id',
            component: AccesorioActualizarComponent
          },
        ]
      },
      {
        path: 'gestionCabello',
        component: CabelloMainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'visualizar'
          },
          {
            path: 'visualizar',
            component: CabelloVisualizarComponent
          },
          {
            path: 'crear',
            component: CabelloCrearComponent
          },
          {
            path: 'actualizar/:id',
            component: CabelloActualizarComponent
          },
        ]
      },
      {
        path: 'gestionRostro',
        component: RostroMainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'visualizar'
          },
          {
            path: 'visualizar',
            component: RostroVisualizarComponent
          },
          {
            path: 'crear',
            component: RostroCrearComponent
          },
          {
            path: 'actualizar/:id',
            component: RostroActualizarComponent
          },
        ]
      },
      {
        path: 'gestionVestimenta',
        component: VestimentaMainComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'visualizar'
          },
          {
            path: 'visualizar',
            component: VestimentaVisualizarComponent
          },
          {
            path: 'crear',
            component: VestimentaCrearComponent
          },
          {
            path: 'actualizar/:id',
            component: VestimentaActualizarComponent
          },
        ]
      },
      {
        path: 'acceso-consumidor',
        component: CodigoAccesoMainComponent
      },
      {
        path: 'gestionComunidad',
        component: ComunidadVisualizarComponent,
        children:[
          {
            path: 'mimebroscomunidad/:idComunidad',
            component: ComunidadVisualizarConsumidoresComponent
          }
        ]
      },
      {
        path: 'gestionDepartamentos',
        component: DepartamentoMainAdministradorComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo:'accesoDepartamento'
          },
          {
            path: 'accesoDepartamento',
            component: DepartamentoGestionComponent
          },
          {
            path: 'crear',
            component: DepartamentoCrearComponent
          },
          {
            path: 'visualizar',
            component: DepartamentoVisualizarComponent
          },
          {
            path: 'actualizar/:idDepartamento',
            component: DepartamentoActualizarComponent
          }
        ]
      }
    ]
  },
  {
    path: 'Usuario',
    component: UsuarioMainComponent,
    children:[
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'perfil'
      },
      {
        path: 'perfil',
        component: PerfilMainComponent
      },
      {
        path: 'generarcodigo',
        component: ScanMainComponent
      },
      {
        path: 'comunidades',
        component: ComunidadMainComponent,
        children:[
          {
            path: 'chat/:idComunidad',
            component: ComunidadChatComponent
          }
        ]
      },
      {
        path: 'miembros/:idComunidad',
        component: MiembroMainComponent,
        children: [
          {
            path: 'avatar/:idConsumidor',
            component: MiembroAvatarComponent
          }
        ]
      },
      {
        path: 'departamento',
        component: DepartamentoMainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
