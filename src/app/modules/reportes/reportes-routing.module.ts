import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuradosDeSolicitudComponent } from './jurados-de-solicitud/jurados-de-solicitud.component';
import { LineaDeInvestigacionDeJuradoComponent } from './linea-de-investigacion-de-jurado/linea-de-investigacion-de-jurado.component';
import { ProponenteDeSolicitudComponent } from './proponente-de-solicitud/proponente-de-solicitud.component';
import { ResultadoEvaluacionComponent } from './resultado-evaluacion/resultado-evaluacion.component';
import { TipoDeComiteDeSolicitudComponent } from './tipo-de-comite-de-solicitud/tipo-de-comite-de-solicitud.component';

const routes: Routes = [
  {
    path: "jurados-de-solicitud",
    component: JuradosDeSolicitudComponent
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
