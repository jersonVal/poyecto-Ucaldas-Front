import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData } from 'src/app/config/general-data';
import { CredencialesCrearProponenteModel } from 'src/app/modelos/credenciales-crear-proponente.model';
import {BussinessService} from 'src/app/servicios/bussiness.service';

declare const OpenGeneralModal: any;


@Component({
  selector: 'app-crear-proponente',
  templateUrl: './crear-proponente.component.html',
  styleUrls: ['./crear-proponente.component.css']
})
export class CrearProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService
  ) { }

  ngOnInit(): void {
  }

  CreateForm(){
    this.form=this.fb.group({
      primerNombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      segundoNombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      primerApellido:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      segundoApellido:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      documento:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      correo:["",[Validators.required,Validators.email,Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      fechaNacimiento:["",[Validators.required]],
      celular:["",[Validators.required,Validators.maxLength(GeneralData.PHONE_MAX_LENGHT)]],
      foto:["sfadsgsfhdggh",[Validators.required]],
      idDepartamento:["dgsgsgs",[Validators.required]],
      idTipoVinculacion:["gsdgdsgsfgf",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearProponente(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      OpenGeneralModal('Formulario correcto a identificar')
      let modelo = new CredencialesCrearProponenteModel();
      modelo.primerNombre = this.GetForm['primerNombre'].value;
      modelo.segundoNombre = this.GetForm['segundoNombre'].value;
      modelo.primerApellido = this.GetForm['primerApellido'].value;
      modelo.segundoApellido = this.GetForm['segundoApellido'].value;
      modelo.documento = this.GetForm['documento'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.fechaNacimiento = this.GetForm['fechaNacimiento'].value;
      modelo.celular = this.GetForm['celular'].value;
      modelo.foto = this.GetForm['foto'].value;
      modelo.idDepartamento = this.GetForm['idDepartamento'].value;
      modelo.idTipoVinculacion = this.GetForm['idTipoVinculacion'].value;
      //Llamado al servicio de identificacion de usuario
      this.bussinessService.CrearProponente(modelo).subscribe({
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
