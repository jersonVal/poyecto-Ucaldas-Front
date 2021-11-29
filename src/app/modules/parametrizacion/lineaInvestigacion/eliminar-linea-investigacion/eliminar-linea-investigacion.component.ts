import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-linea-investigacion',
  templateUrl: './eliminar-linea-investigacion.component.html',
  styleUrls: ['./eliminar-linea-investigacion.component.css']
})
export class EliminarLineaInvestigacionComponent implements OnInit {

  id: string = "";
  nombre: string = "";

  constructor(
    private lineaInvestigacionService: LineaInvestigacionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.lineaInvestigacionService.BuscarRegistro(_id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        if(data._id &&  data.nombre){
          this.id = data._id;
          this.nombre = data.nombre;
        }
      }
    })
  }

  RemoveLineaInvestigacion(){
    //Llamado al servicio de identificacion de usuario
    this.lineaInvestigacionService.RemoveLineaInvestigacion(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/parametrizacion/linea-investigacion/listar-linea-investigacion"])
    
  }

}
