import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-facultad',
  templateUrl: './eliminar-facultad.component.html',
  styleUrls: ['./eliminar-facultad.component.css']
})
export class EliminarFacultadComponent implements OnInit {

  id: string = "";
  nombre: string = "";
  codigo: string ="";

  constructor(
    private facultadService: FacultadService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.BuscarRegistro();
  }


  RemoveFacultad(){
    //Llamado al servicio de identificacion de usuario
    this.facultadService.RemoveFacultad(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/parametrizacion/facultad/listar-facultad"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
    
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.facultadService.BuscarRegistro(_id).subscribe({
      next: (data: FacultadModel) => {
        if(data._id && data.codigo && data.nombre){
          this.id = data._id;
          this.codigo = data.codigo;
          this.nombre = data.nombre;
        }
      }
    })
  }

  
}
