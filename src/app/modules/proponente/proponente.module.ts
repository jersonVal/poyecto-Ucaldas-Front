import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProponenteRoutingModule } from './proponente-routing.module';
import { CrearProponenteComponent } from './crear-proponente/crear-proponente.component';
import { EliminarProponenteComponent } from './eliminar-proponente/eliminar-proponente.component';
import { EditarProponenteComponent } from './editar-proponente/editar-proponente.component';
import { ListarProponenteComponent } from './listar-proponente/listar-proponente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProponenteComponent,
    EliminarProponenteComponent,
    EditarProponenteComponent,
    ListarProponenteComponent
  ],
  imports: [
    CommonModule,
    ProponenteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProponenteModule { }
