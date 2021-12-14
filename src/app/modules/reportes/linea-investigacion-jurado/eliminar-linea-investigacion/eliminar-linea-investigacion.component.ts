import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/jurado-linea-investigacion.model';
import { JuradoLineaInvestigacionService } from 'src/app/servicios/reportes/jurado-linea-investigacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-linea-investigacion',
  templateUrl: './eliminar-linea-investigacion.component.html',
  styleUrls: ['./eliminar-linea-investigacion.component.css']
})
export class EliminarLineaInvestigacionComponent implements OnInit {

  id: string = "";
  id_lineaInvestigacion: string = "";
  id_jurado: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private juradoLineaService: JuradoLineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  BuscarRegistro() {
    let _id = this.route.snapshot.params["_id"];
    this.juradoLineaService.BuscarRegistro(_id).subscribe({
      next: (data: JuradoLineaInvestigacionModel) => {
        console.log(data);

        if (data._id && data.id_lineaInvestigacion && data.id_jurado ) {
          this.id = data._id
          this.id_lineaInvestigacion = data.id_lineaInvestigacion
          this.id_jurado = data.id_jurado
        }
      }
    })
  }

  EliminarJuradoLinea() {
    //Llamado al servicio de identificacion de usuario
    this.juradoLineaService.EliminarJuradoLinea(this.id).subscribe({
      next: (data: any) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/reportes/lineas-de-investigacion-de-jurado/listar-linea-investigacion-jurado"])
      },
      error: (error: any) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    

  }

}
