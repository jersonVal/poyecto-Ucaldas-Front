import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJuradoSolicitudComponent } from './jurado-solicitud/crear-jurado-solicitud/crear-jurado-solicitud.component';
import { EditarJuradoSolicitudComponent } from './jurado-solicitud/editar-jurado-solicitud/editar-jurado-solicitud.component';
import { EliminarJuradoSolicitudComponent } from './jurado-solicitud/eliminar-jurado-solicitud/eliminar-jurado-solicitud.component';
import { ListarJuradoSolicitudComponent } from './jurado-solicitud/listar-jurado-solicitud/listar-jurado-solicitud.component';
import { LineaDeInvestigacionDeJuradoComponent } from './linea-de-investigacion-de-jurado/linea-de-investigacion-de-jurado.component';
import { ProponenteDeSolicitudComponent } from './proponente-de-solicitud/proponente-de-solicitud.component';
import { ResultadoEvaluacionComponent } from './resultado-evaluacion/resultado-evaluacion.component';
import { TipoDeComiteDeSolicitudComponent } from './tipo-de-comite-de-solicitud/tipo-de-comite-de-solicitud.component';

const routes: Routes = [
  {
    path: "jurado-solicitud/crear-jurado-solicitud",
    component: CrearJuradoSolicitudComponent
  },
  {
    path: "jurado-solicitud/editar-jurado-solicitud/:_id",
    component: EditarJuradoSolicitudComponent
  },
  {
    path: "jurado-solicitud/eliminar-jurado-solicitud/:_id",
    component: EliminarJuradoSolicitudComponent
  },
  {
    path: "jurado-solicitud/listar-jurado-solicitud",
    component: ListarJuradoSolicitudComponent
  },
  {
    path:"lineas-de-investigacion-de-jurado",
    component: LineaDeInvestigacionDeJuradoComponent
  },
  {
    path: "proponente-de-solicitud",
    component: ProponenteDeSolicitudComponent
  },
  {
    path: "resultado-evaluacion",
    component: ResultadoEvaluacionComponent
  },
  {
    path: "tipo-comite-de-solicitud",
    component: TipoDeComiteDeSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
