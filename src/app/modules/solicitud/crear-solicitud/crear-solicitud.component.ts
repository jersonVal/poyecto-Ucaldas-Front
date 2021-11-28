import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearSolicitudModel } from 'src/app/modelos/solicitud/credenciales-crear-solicitud.model';
import {BussinessService} from 'src/app/servicios/bussiness.service'


declare const OpenGeneralModal: any;
declare const InitSelectById: any;
@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.InitSelect();
  }

  CreateForm(){
    this.form=this.fb.group({
      fecha:["",[Validators.required]],
      archivo:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      nombreTrabajo:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      idEstado:["dfsdgdsgsd",[Validators.required]],
      idTipoSolicitud:["gsdgdsgdsgds",[Validators.required]],
      idModalidad:["hdshdsgdsgsdg",[Validators.required]],
      idLineaInvestigacion:["hsdhdsfgsfds",[Validators.required]],
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearSolicitudModel();
      modelo.fecha = this.GetForm['fecha'].value;
      modelo.archivo = this.GetForm['archivo'].value;
      modelo.descripcion = this.GetForm['descripcion'].value;
      modelo.nombreTrabajo = this.GetForm['nombreTrabajo'].value;
      modelo.idEstado = this.GetForm['idEstado'].value;
      modelo.idTipoSolicitud = this.GetForm['idTipoSolicitud'].value;
      modelo.idModalidad = this.GetForm['idModalidad'].value;
      modelo.idLineaInvestigacion = this.GetForm['idLineaInvestigacion'].value;
      //Llamado al servicio de identificacion de usuario
      this.bussinessService.CrearSolicitud(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      this.router.navigate(['/solicitud/listar-solicitud'])
    }
  }

  InitSelect(){
    InitSelectById('idEstado');
    InitSelectById('idModalidad');
    InitSelectById('idTipoSolicitud');
    InitSelectById('idLineaInvestigacion')
  }

}
