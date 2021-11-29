import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/tipo-comite.model';
import { TipoComiteService } from 'src/app/servicios/parametrizacion/tipo-comite.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-tipo-comite',
  templateUrl: './eliminar-tipo-comite.component.html',
  styleUrls: ['./eliminar-tipo-comite.component.css']
})
export class EliminarTipoComiteComponent implements OnInit {

  id: string = "";
  nombre: string = "";

  constructor(
    private tipoComiteService: TipoComiteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro()
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.tipoComiteService.BuscarRegistro(_id).subscribe({
      next: (data: TipoComiteModel) => {
        if(data._id &&  data.nombre){
          this.id = data._id;
          this.nombre = data.nombre;
        }
      }
    })
  }

  RemoveTipoComite(){
    //Llamado al servicio de identificacion de usuario
    this.tipoComiteService.RemoveTipoComite(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/parametrizacion/tipo-comite/listar-tipo-comite"])
    
  }


}
