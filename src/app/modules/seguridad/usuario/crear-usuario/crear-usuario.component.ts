import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearUsuarioModel } from 'src/app/modelos/credenciales-crear-usuario.model';
import {SeguridadService} from 'src/app/servicios/seguridad.service'

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

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
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      apellidos:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      telefono:["",[Validators.required,Validators.maxLength(GeneralData.PHONE_MAX_LENGHT)]],
      correo:["",[Validators.required,Validators.email,Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      documento:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      fechaNacimiento:["",[Validators.required]],
      idRol:["617f715792854e2188063b68",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearUsuario(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      OpenGeneralModal('Formulario correcto a identificar')
      let modelo = new CredencialesCrearUsuarioModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.apellidos = this.GetForm['apellidos'].value;
      modelo.telefono = this.GetForm['telefono'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.documento = this.GetForm['documento'].value;
      modelo.fechaNacimiento = this.GetForm['fechaNacimiento'].value;
      modelo.idRol = this.GetForm['idRol'].value;
      //Llamado al servicio de identificacion de usuario
      this.servicioSeguridad.CrearUsuario(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
    }
  }

}
