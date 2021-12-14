import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-eliminar-proponente',
  templateUrl: './eliminar-proponente.component.html',
  styleUrls: ['./eliminar-proponente.component.css']
})
export class EliminarProponenteComponent implements OnInit {

  id: string="";
  nombre: string="";
  apellidos: string="";
  documento: string="";
  correo: string="";
  fechaNacimiento: string="";
  celular: string="";
  foto: string="";
  id_departamento: string="";
  id_tipoVinculacion: string="";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bussinessService: BussinessService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarProponente(){
    //Llamado al servicio de identificacion de usuario
    this.bussinessService.EliminarProponente(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
        this.router.navigate(["/proponente/listar-proponente"])
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    
  }

  
  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.bussinessService.BuscarRegistro(_id).subscribe({
      next: (data: ProponenteModel) => {
        console.log(data);
        
        if(data._id && data.nombre && data.apellidos && data.documento && data.correo && data.fechaNacimiento && data.celular && (data.foto || data.foto==="") && data.id_departamento && data.id_tipoVinculacion){
          this.id = data._id;
          this.nombre = data.nombre;
          this.apellidos = data.apellidos;
          this.documento = data.documento;
          this.correo = data.correo;
          this.fechaNacimiento = data.fechaNacimiento;
          this.celular = data.celular;
          this.foto = data.foto;
          this.id_departamento = data.id_departamento;
          this.id_tipoVinculacion = data.id_tipoVinculacion;
        }
      }
    })
  }

}
