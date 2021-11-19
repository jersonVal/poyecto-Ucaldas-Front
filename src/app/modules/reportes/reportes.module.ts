import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { JuradosDeSolicitudComponent } from './jurados-de-solicitud/jurados-de-solicitud.component';
import { TipoDeComiteDeSolicitudComponent } from './tipo-de-comite-de-solicitud/tipo-de-comite-de-solicitud.component';
import { ResultadoEvaluacionComponent } from './resultado-evaluacion/resultado-evaluacion.component';
import { LineaDeInvestigacionDeJuradoComponent } from './linea-de-investigacion-de-jurado/linea-de-investigacion-de-jurado.component';
import { ProponenteDeSolicitudComponent } from './proponente-de-solicitud/proponente-de-solicitud.component';


@NgModule({
  declarations: [
    JuradosDeSolicitudComponent,
    TipoDeComiteDeSolicitudComponent,
    ResultadoEvaluacionComponent,
    LineaDeInvestigacionDeJuradoComponent,
    ProponenteDeSolicitudComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
