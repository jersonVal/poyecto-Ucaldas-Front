import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearRolModel } from 'src/app/modelos/parametrizacion/rol/credenciales-rol.model';
import { RolService } from 'src/app/servicios/parametrizacion/rol.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioRol: RolService,
    private router: Router
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

  CrearRol(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearRolModel();
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.servicioRol.CrearRol(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
          this.router.navigate(["/parametrizacion/rol/listar-rol"])
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
    }
  }

}
