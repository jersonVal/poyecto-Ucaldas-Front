import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProponenteComponent } from './crear-proponente/crear-proponente.component';
import { EditarProponenteComponent } from './editar-proponente/editar-proponente.component';
import { EliminarProponenteComponent } from './eliminar-proponente/eliminar-proponente.component';
import { ListarProponenteComponent } from './listar-proponente/listar-proponente.component';

const routes: Routes = [
  {
    path: "crear-proponente",
    component: CrearProponenteComponent
  },
  {
    path: "editar-proponente",
    component: EditarProponenteComponent
  },
  {
    path: "eliminar-proponente",
    component: EliminarProponenteComponent
  },
  {
    path: "listar-proponente",
    component: ListarProponenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProponenteRoutingModule { }
