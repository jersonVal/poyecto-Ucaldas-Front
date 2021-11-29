import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { ListarDepartamentoComponent } from './departamento/listar-departamento/listar-departamento.component';
import { CrearEstadoComponent } from './estado/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estado/eliminar-estado/eliminar-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { EliminarFacultadComponent } from './facultad/eliminar-facultad/eliminar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { CrearLineaInvestigacionComponent } from './lineaInvestigacion/crear-linea-investigacion/crear-linea-investigacion.component';
import { EditarLineaInvestigacionComponent } from './lineaInvestigacion/editar-linea-investigacion/editar-linea-investigacion.component';
import { EliminarLineaInvestigacionComponent } from './lineaInvestigacion/eliminar-linea-investigacion/eliminar-linea-investigacion.component';
import { ListarLineaInvestigacionComponent } from './lineaInvestigacion/listar-linea-investigacion/listar-linea-investigacion.component';
import { CrearModalidadComponent } from './modalidad/crear-modalidad/crear-modalidad.component';
import { EditarModalidadComponent } from './modalidad/editar-modalidad/editar-modalidad.component';
import { EliminarModalidadComponent } from './modalidad/eliminar-modalidad/eliminar-modalidad.component';
import { ListarModalidadComponent } from './modalidad/listar-modalidad/listar-modalidad.component';
import { CrearRolComponent } from './rol/crear-rol/crear-rol.component';
import { EditarRolComponent } from './rol/editar-rol/editar-rol.component';
import { EliminarRolComponent } from './rol/eliminar-rol/eliminar-rol.component';
import { ListarRolComponent } from './rol/listar-rol/listar-rol.component';
import { CrearTipoComiteComponent } from './tipoComite/crear-tipo-comite/crear-tipo-comite.component';
import { EditarTipoComiteComponent } from './tipoComite/editar-tipo-comite/editar-tipo-comite.component';
import { EliminarTipoComiteComponent } from './tipoComite/eliminar-tipo-comite/eliminar-tipo-comite.component';
import { ListarTipoComiteComponent } from './tipoComite/listar-tipo-comite/listar-tipo-comite.component';
import { CrearTipoSolicitudComponent } from './tipoSolicitud/crear-tipo-solicitud/crear-tipo-solicitud.component';
import { EditarTipoSolicitudComponent } from './tipoSolicitud/editar-tipo-solicitud/editar-tipo-solicitud.component';
import { EliminarTipoSolicitudComponent } from './tipoSolicitud/eliminar-tipo-solicitud/eliminar-tipo-solicitud.component';
import { ListarTipoSolicitudComponent } from './tipoSolicitud/listar-tipo-solicitud/listar-tipo-solicitud.component';
import { CrearTipoVinculacionComponent } from './tipoVinculacion/crear-tipo-vinculacion/crear-tipo-vinculacion.component';
import { EditarTipoVinculacionComponent } from './tipoVinculacion/editar-tipo-vinculacion/editar-tipo-vinculacion.component';
import { EliminarTipoVinculacionComponent } from './tipoVinculacion/eliminar-tipo-vinculacion/eliminar-tipo-vinculacion.component';
import { ListarTipoVinculacionComponent } from './tipoVinculacion/listar-tipo-vinculacion/listar-tipo-vinculacion.component';

const routes: Routes = [
  {
    path: "rol/crear-rol",
    component: CrearRolComponent
  },
  {
    path: "rol/editar-rol",
    component: EditarRolComponent
  },
  {
    path: "rol/eliminar-rol",
    component: EliminarRolComponent
  },
  {
    path: "rol/listar-rol",
    component: ListarRolComponent
  },
  {
    path: "departamento/crear-departamento",
    component: CrearDepartamentoComponent 
  },
  {
    path: "departamento/editar-departamento/:_id",
    component: EditarDepartamentoComponent 
  },
  {
    path: "departamento/eliminar-departamento/:_id",
    component: EliminarDepartamentoComponent 
  },
  {
    path: "departamento/listar-departamento",
    component: ListarDepartamentoComponent 
  },
  {
    path: "estado/crear-estado",
    component: CrearEstadoComponent
  },
  {
    path: "estado/eliminar-estado",
    component: EliminarEstadoComponent
  },
  {
    path: "estado/editar-estado",
    component: EditarEstadoComponent
  },
  {
    path: "estado/listar-estado",
    component: ListarEstadoComponent
  },
  {
    path: "facultad/crear-facultad",
    component: CrearFacultadComponent
  },
  {
    path: "facultad/editar-facultad/:_id",
    component: EditarFacultadComponent
  },
  {
    path: "facultad/eliminar-facultad/:_id",
    component: EliminarFacultadComponent
  },
  {
    path: "facultad/listar-facultad",
    component: ListarFacultadComponent
  },
  {
    path: "linea-investigacion/crear-linea-investigacion",
    component: CrearLineaInvestigacionComponent
  },
  {
    path: "linea-investigacion/editar-linea-investigacion",
    component: EditarLineaInvestigacionComponent
  },
  {
    path: "linea-investigacion/eliminar-linea-investigacion",
    component: EliminarLineaInvestigacionComponent
  },
  {
    path: "linea-investigacion/listar-linea-investigacion",
    component: ListarLineaInvestigacionComponent
  },
  {
    path: "modalidad/crear-modalidad",
    component: CrearModalidadComponent
  },
  {
    path: "modalidad/editar-modalidad/:_id",
    component: EditarModalidadComponent
  },
  {
    path: "modalidad/eliminar-modalidad/:_id",
    component: EliminarModalidadComponent
  },
  {
    path: "modalidad/listar-modalidad",
    component: ListarModalidadComponent
  },
  {
    path: "tipo-comite/crear-tipo-comite",
    component: CrearTipoComiteComponent
  },
  {
    path: "tipo-comite/editar-tipo-comite",
    component: EditarTipoComiteComponent
  },
  {
    path: "tipo-comite/eliminar-tipo-comite",
    component: EliminarTipoComiteComponent
  },
  {
    path: "tipo-comite/listar-tipo-comite",
    component: ListarTipoComiteComponent
  },
  {
    path: "tipo-solicitud/crear-tipo-solicitud",
    component: CrearTipoSolicitudComponent
  },
  {
    path: "tipo-solicitud/editar-tipo-solicitud/:_id",
    component: EditarTipoSolicitudComponent
  },
  {
    path: "tipo-solicitud/eliminar-tipo-solicitud/:_id",
    component: EliminarTipoSolicitudComponent
  },
  {
    path: "tipo-solicitud/listar-tipo-solicitud",
    component: ListarTipoSolicitudComponent
  },
  {
    path: "tipo-vinculacion/crear-tipo-vinculacion",
    component: CrearTipoVinculacionComponent
  },
  {
    path: "tipo-vinculacion/editar-tipo-vinculacion",
    component: EditarTipoVinculacionComponent
  },
  {
    path: "tipo-vinculacion/eliminar-tipo-vinculacion",
    component: EliminarTipoVinculacionComponent
  },
  {
    path: "tipo-vinculacion/listar-tipo-vinculacion",
    component: ListarTipoVinculacionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrizacionRoutingModule { }
