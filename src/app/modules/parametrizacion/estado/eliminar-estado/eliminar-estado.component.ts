import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-estado',
  templateUrl: './eliminar-estado.component.html',
  styleUrls: ['./eliminar-estado.component.css']
})
export class EliminarEstadoComponent implements OnInit {

  id: string = "";
  tipo: string = "";

  constructor(
    private estadoService: EstadoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.estadoService.BuscarRegistro(_id).subscribe({
      next: (data: EstadoModel) => {
        if(data._id && data.tipo){
          this.id = data._id;
          this.tipo = data.tipo;
        }
      }
    })
  }

  RemoveEstado(){
    //Llamado al servicio de identificacion de usuario
    this.estadoService.RemoveEstado(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/parametrizacion/estado/listar-estado"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
    
  }

}
