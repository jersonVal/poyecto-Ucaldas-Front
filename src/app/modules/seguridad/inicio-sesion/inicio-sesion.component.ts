import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesUsuarioModel } from 'src/app/modelos/credenciales-usuario.model';
import {MD5} from 'crypto-js'
import {SeguridadService} from 'src/app/servicios/seguridad.service'


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

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
      username:["",[Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      password:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]]
    })
  }

  Login(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      OpenGeneralModal('Formulario correcto a identificar')
      let modelo = new CredencialesUsuarioModel();
      modelo.username = this.GetForm['username'].value;
      modelo.password = MD5(this.GetForm['password'].value).toString();
      //Llamado al servicio de identificacion de usuario
      this.servicioSeguridad.Login(modelo).subscribe({
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