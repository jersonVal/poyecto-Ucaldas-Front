import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-tipo-vinculacion',
  templateUrl: './eliminar-tipo-vinculacion.component.html',
  styleUrls: ['./eliminar-tipo-vinculacion.component.css']
})
export class EliminarTipoVinculacionComponent implements OnInit {

  id: string = "";
  nombre: string = "";

  constructor(
    private tipoVinculacionService: TipoVinculacionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.tipoVinculacionService.BuscarRegistro(_id).subscribe({
      next: (data: TipoVinculacionModel) => {
        if(data._id &&  data.nombre){
          this.id = data._id;
          this.nombre = data.nombre;
        }
      }
    })
  }

  RemoveTipoVinculacion(){
    //Llamado al servicio de identificacion de usuario
    this.tipoVinculacionService.RemoveTipoVinculacion(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/parametrizacion/tipo-vinculacion/listar-tipo-vinculacion"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
    
  }

}
