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
import { CrearLineaInvestigacionComponent } from './linea-investigacion-jurado/crear-linea-investigacion/crear-linea-investigacion.component';
import { EditarLineaInvestigacionComponent } from './linea-investigacion-jurado/editar-linea-investigacion/editar-linea-investigacion.component';
import { EliminarLineaInvestigacionComponent } from './linea-investigacion-jurado/eliminar-linea-investigacion/eliminar-linea-investigacion.component';
import { ListarLineaInvestigacionComponent } from './linea-investigacion-jurado/listar-linea-investigacion/listar-linea-investigacion.component';


@NgModule({
  declarations: [
    TipoDeComiteDeSolicitudComponent,
    ResultadoEvaluacionComponent,
    LineaDeInvestigacionDeJuradoComponent,
    ProponenteDeSolicitudComponent,
    CrearJuradoSolicitudComponent,
    EditarJuradoSolicitudComponent,
    ListarJuradoSolicitudComponent,
    EliminarJuradoSolicitudComponent,
    CrearLineaInvestigacionComponent,
    EditarLineaInvestigacionComponent,
    EliminarLineaInvestigacionComponent,
    ListarLineaInvestigacionComponent
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
