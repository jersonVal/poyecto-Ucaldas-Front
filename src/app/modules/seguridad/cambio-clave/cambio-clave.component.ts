import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCambiarClaveModel } from 'src/app/modelos/seguridad/credenciales-cambiar-clave.model';
import {MD5} from 'crypto-js'
import {SeguridadService} from 'src/app/servicios/seguridad.service'


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-cambio-clave',
  templateUrl: './cambio-clave.component.html',
  styleUrls: ['./cambio-clave.component.css']
})
export class CambioClaveComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      email:["",[Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      clave_actual:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      clave_nueva:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    })
  }

  CambiarClave(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      OpenGeneralModal('Formulario correcto a identificar');
      let modelo = new CredencialesCambiarClaveModel();
      modelo.email = this.GetForm['email'].value;
      modelo.clave_actual = this.GetForm['clave_actual'].value;
      modelo.clave_nueva = this.GetForm['clave_nueva'].value;
      //Llamado al servicio de identificacion de usuario
      this.servicioSeguridad.CambiarClave(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
        },
        error:( error:any ) => {
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
    }
  }

  get GetForm(){
    return this.form.controls;
  }

}
