import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { RecuperacionClaveComponent } from './recuperacion-clave/recuperacion-clave.component';
import { CrearUsuarioComponent } from './usuario/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuario/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuario/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
    path: "cambio-clave",
    component: CambioClaveComponent
  },
  {
    path: "cerrar-sesion",
    component: CerrarSesionComponent
  },
  {
    path: "inicio-sesion",
    component: InicioSesionComponent
  },
  {
    path: "recuperar-clave",
    component: RecuperacionClaveComponent
  },
  {
    path: "usuario/crear-usuario",
    component: CrearUsuarioComponent
  },
  {
    path: "usuario/editar-usuario",
    component: EditarUsuarioComponent
  },
  {
    path: "usuario/eliminar-usuario",
    component: EliminarUsuarioComponent
  },
  {
    path: "usuario/listar-usaurio",
    component: ListarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
