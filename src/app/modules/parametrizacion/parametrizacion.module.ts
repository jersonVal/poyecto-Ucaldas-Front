import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrizacionRoutingModule } from './parametrizacion-routing.module';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearTipoSolicitudComponent } from './tipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearTipoVinculacionComponent } from './tipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';
import { CrearTipoComiteComponent } from './tipoComite/crear-tipo-comite/crear-tipo-comite.component';
import { EditarTipoComiteComponent } from './tipoComite/editar-tipo-comite/editar-tipo-comite.component';
import { EliminarTipoComiteComponent } from './tipoComite/eliminar-tipo-comite/eliminar-tipo-comite.component';
import { ListarTipoComiteComponent } from './tipoComite/listar-tipo-comite/listar-tipo-comite.component';
import { CrearLineaInvestigacionComponent } from './lineaInvestigacion/crear-linea-investigacion/crear-linea-investigacion.component';
import { EditarLineaInvestigacionComponent } from './lineaInvestigacion/editar-linea-investigacion/editar-linea-investigacion.component';
import { EliminarLineaInvestigacionComponent } from './lineaInvestigacion/eliminar-linea-investigacion/eliminar-linea-investigacion.component';
import { ListarLineaInvestigacionComponent } from './lineaInvestigacion/listar-linea-investigacion/listar-linea-investigacion.component';


@NgModule({
  declarations: [
    CrearFacultadComponent,
    EditarFacultadComponent,
    EliminarFacultadComponent,
    ListarFacultadComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    ListarDepartamentoComponent,
    CrearTipoSolicitudComponent,
    EditarTipoSolicitudComponent,
    EliminarTipoSolicitudComponent,
    ListarTipoSolicitudComponent,
    CrearTipoVinculacionComponent,
    EditarTipoVinculacionComponent,
    EliminarTipoVinculacionComponent,
    ListarTipoVinculacionComponent,
    CrearEstadoComponent,
    EditarEstadoComponent,
    EliminarEstadoComponent,
    ListarEstadoComponent,
    CrearModalidadComponent,
    EditarModalidadComponent,
    EliminarModalidadComponent,
    ListarModalidadComponent,
    CrearTipoComiteComponent,
    EditarTipoComiteComponent,
    EliminarTipoComiteComponent,
    ListarTipoComiteComponent,
    CrearLineaInvestigacionComponent,
    EditarLineaInvestigacionComponent,
    EliminarLineaInvestigacionComponent,
    ListarLineaInvestigacionComponent
  ],
  imports: [
    CommonModule,
    ParametrizacionRoutingModule
  ]
})
export class ParametrizacionModule { }
