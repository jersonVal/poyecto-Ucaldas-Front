import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-jurado',
  templateUrl: './eliminar-jurado.component.html',
  styleUrls: ['./eliminar-jurado.component.css']
})
export class EliminarJuradoComponent implements OnInit {

  id:string="";
  nombre: string="";
  apellidos: string="";
  telefono: string="";
  correo: string="";
  entidad: string="";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarJurado(){
    //Llamado al servicio de identificacion de usuario
    this.juradoService.EliminarJurado(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/jurado/listar-jurado"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
    
  }
  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.juradoService.BuscarRegistro(_id).subscribe({
      next: (data: JuradoModel) => {
        if(data._id && data.nombre && data.apellidos && data.telefono && data.correo && data.entidad){
          this.id = data._id;
          this.nombre = data.nombre;
          this.apellidos = data.apellidos;
          this.telefono = data.telefono
          this.correo = data.correo;
          this.entidad = data.entidad;
        }
      }
    })
  }

}
