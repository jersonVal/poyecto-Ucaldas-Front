import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/credenciales-modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-modalidad',
  templateUrl: './crear-modalidad.component.html',
  styleUrls: ['./crear-modalidad.component.css']
})
export class CrearModalidadComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private modalidadService: ModalidadService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearModalidad(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearModalidadModel();
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.modalidadService.CrearModalidad(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/modalidad/listar-modalidad"])
    }
  }

}
