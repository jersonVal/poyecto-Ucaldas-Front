import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-modalidad',
  templateUrl: './eliminar-modalidad.component.html',
  styleUrls: ['./eliminar-modalidad.component.css']
})
export class EliminarModalidadComponent implements OnInit {

  id: string="";
  nombre: string="";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalidadService: ModalidadService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarModalidad(){
    //Llamado al servicio de identificacion de usuario
    this.modalidadService.EliminarModalidad(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/parametrizacion/modalidad/listar-modalidad"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
    
  }
  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.modalidadService.BuscarRegistro(_id).subscribe({
      next: (data: ModalidadModel) => {
        console.log(data);
        
        if(data._id && data.nombre){
          this.id = data._id;
          this.nombre = data.nombre;
        }
      }
    })
  }

}
