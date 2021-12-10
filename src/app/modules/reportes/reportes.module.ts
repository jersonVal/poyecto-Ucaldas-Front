import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { TipoDeComiteDeSolicitudComponent } from './tipo-de-comite-de-solicitud/tipo-de-comite-de-solicitud.component';
import { ResultadoEvaluacionComponent } from './resultado-evaluacion/resultado-evaluacion.component';
import { LineaDeInvestigacionDeJuradoComponent } from './linea-de-investigacion-de-jurado/linea-de-investigacion-de-jurado.component';
import { ProponenteDeSolicitudComponent } from './proponente-de-solicitud/proponente-de-solicitud.component';
import { CrearJuradoSolicitudComponent } from './jurado-solicitud/crear-jurado-solicitud/crear-jurado-solicitud.component';
import { EditarJuradoSolicitudComponent } from './jurado-solicitud/editar-jurado-solicitud/editar-jurado-solicitud.component';
import { ListarJuradoSolicitudComponent } from './jurado-solicitud/listar-jurado-solicitud/listar-jurado-solicitud.component';
import { EliminarJuradoSolicitudComponent } from './jurado-solicitud/eliminar-jurado-solicitud/eliminar-jurado-solicitud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TipoDeComiteDeSolicitudComponent,
    ResultadoEvaluacionComponent,
    LineaDeInvestigacionDeJuradoComponent,
    ProponenteDeSolicitudComponent,
    CrearJuradoSolicitudComponent,
    EditarJuradoSolicitudComponent,
    ListarJuradoSolicitudComponent,
    EliminarJuradoSolicitudComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ReportesModule { }
