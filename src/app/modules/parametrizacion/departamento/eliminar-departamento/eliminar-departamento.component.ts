import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';


declare const OpenGeneralModal: any;


@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent implements OnInit {

  id: string="";
  nombre: string="";
  facultad: string="";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
  }

  EliminarDepartamento(){
    //Llamado al servicio de identificacion de usuario
    this.departamentoService.EliminarDepartamento(this.id).subscribe({
      next:( data:any ) => {
        OpenGeneralModal('Eliminado con Exito')
      },
      error:( error:any ) => {
        console.log(error)
        OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
      }
    })
    this.router.navigate(["/parametrizacion/departamento/listar-departamento"])
    
  }
  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.departamentoService.BuscarRegistro(_id).subscribe({
      next: (data: DepartamentoModel) => {
        console.log(data);
        
        if(data._id && data.nombre && data.id_facultad ){
          this.id = data._id;
          this.nombre = data.nombre;
          this.facultad = data.id_facultad;
        }
      }
    })
  }


}
