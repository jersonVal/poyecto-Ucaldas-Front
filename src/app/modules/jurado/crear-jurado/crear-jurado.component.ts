import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { Router } from '@angular/router';
import { CredencialesCrearJuradoModel } from 'src/app/modelos/jurado/credenciales-crear-jurado.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-jurado',
  templateUrl: './crear-jurado.component.html',
  styleUrls: ['./crear-jurado.component.css']
})
export class CrearJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private bussinessService : BussinessService
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
      entidad:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CreateJurado(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      //OpenGeneralModal('Formulario correcto a identificar');
      let modelo = new CredencialesCrearJuradoModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.apellidos = this.GetForm['apellidos'].value;
      modelo.telefono = this.GetForm['telefono'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.entidad = this.GetForm['entidad'].value;

      //Llamado al servicio de identificacion de usuario
      this.bussinessService.CrearJurado(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado correctamente')
        },
        error:( error:any ) => {
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      this.router.navigate(['/jurado/listar-jurado']);
    }
  }

}
