import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { JuradoRoutingModule } from './jurado-routing.module';
import { CrearJuradoComponent } from './crear-jurado/crear-jurado.component';
import { EliminarJuradoComponent } from './eliminar-jurado/eliminar-jurado.component';
import { EditarJuradoComponent } from './editar-jurado/editar-jurado.component';
import { ListarJuradoComponent } from './listar-jurado/listar-jurado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearJuradoComponent,
    EliminarJuradoComponent,
    EditarJuradoComponent,
    ListarJuradoComponent
  ],
  imports: [
    CommonModule,
    JuradoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class JuradoModule { }
