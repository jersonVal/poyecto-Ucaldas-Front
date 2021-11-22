import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { LoginComponent } from './login/login.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperacionClaveComponent } from './recuperacion-clave/recuperacion-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';


@NgModule({
  declarations: [
    LoginComponent,
    CambioClaveComponent,
    RecuperacionClaveComponent,
    CrearUsuarioComponent,
    CerrarSesionComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    ListarUsuarioComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule
  ]
})
export class SeguridadModule { }
