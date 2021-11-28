import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearTipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/credenciales-tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-tipo-solicitud',
  templateUrl: './crear-tipo-solicitud.component.html',
  styleUrls: ['./crear-tipo-solicitud.component.css']
})
export class CrearTipoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private tipoSolicitudService: TipoSolicitudService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      formato:["",[Validators.required]],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearTipoSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearTipoSolicitudModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.formato = this.GetForm['formato'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoSolicitudService.CrearTipoSolicitud(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/tipo-solicitud/listar-tipo-solicitud"])
    }
  }

}
