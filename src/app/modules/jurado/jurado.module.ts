import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuradoRoutingModule } from './jurado-routing.module';
import { CrearJuradoComponent } from './crear-jurado/crear-jurado.component';
import { EliminarJuradoComponent } from './eliminar-jurado/eliminar-jurado.component';
import { EditarJuradoComponent } from './editar-jurado/editar-jurado.component';
import { ListarJuradoComponent } from './listar-jurado/listar-jurado.component';


@NgModule({
  declarations: [
    CrearJuradoComponent,
    EliminarJuradoComponent,
    EditarJuradoComponent,
    ListarJuradoComponent
  ],
  imports: [
    CommonModule,
    JuradoRoutingModule
  ]
})
export class JuradoModule { }
