import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearJuradoSolicitudComponent } from './jurado-solicitud/crear-jurado-solicitud/crear-jurado-solicitud.component';
import { EditarJuradoSolicitudComponent } from './jurado-solicitud/editar-jurado-solicitud/editar-jurado-solicitud.component';
import { EliminarJuradoSolicitudComponent } from './jurado-solicitud/eliminar-jurado-solicitud/eliminar-jurado-solicitud.component';
import { ListarJuradoSolicitudComponent } from './jurado-solicitud/listar-jurado-solicitud/listar-jurado-solicitud.component';
import { CrearLineaInvestigacionComponent } from './linea-investigacion-jurado/crear-linea-investigacion/crear-linea-investigacion.component';
import { EditarLineaInvestigacionComponent } from './linea-investigacion-jurado/editar-linea-investigacion/editar-linea-investigacion.component';
import { EliminarLineaInvestigacionComponent } from './linea-investigacion-jurado/eliminar-linea-investigacion/eliminar-linea-investigacion.component';
import { ListarLineaInvestigacionComponent } from './linea-investigacion-jurado/listar-linea-investigacion/listar-linea-investigacion.component';
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
    path:"lineas-de-investigacion-de-jurado/crear-linea-investigacion-jurado",
    component: CrearLineaInvestigacionComponent
  },
  {
    path:"lineas-de-investigacion-de-jurado/editar-linea-investigacion-jurado/:_id",
    component: EditarLineaInvestigacionComponent
  },
  {
    path:"lineas-de-investigacion-de-jurado/eliminar-linea-investigacion-jurado/:_id",
    component: EliminarLineaInvestigacionComponent
  },
  {
    path:"lineas-de-investigacion-de-jurado/listar-linea-investigacion-jurado",
    component: ListarLineaInvestigacionComponent
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
