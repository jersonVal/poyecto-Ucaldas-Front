import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJuradoComponent } from './crear-jurado/crear-jurado.component';
import { EditarJuradoComponent } from './editar-jurado/editar-jurado.component';
import { EliminarJuradoComponent } from './eliminar-jurado/eliminar-jurado.component';
import { ListarJuradoComponent } from './listar-jurado/listar-jurado.component';

const routes: Routes = [
  {
    path: "crear-jurado",
    component: CrearJuradoComponent
  },
  {
    path: "editar-jurado",
    component: EditarJuradoComponent
  },
  {
    path: "eliminar-jurado",
    component: EliminarJuradoComponent
  },
  {
    path: "listar-jurado",
    component: ListarJuradoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuradoRoutingModule { }
