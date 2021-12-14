import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearFacultadModel } from 'src/app/modelos/parametrizacion/facultad/credenciales-facultad.model';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-facultad',
  templateUrl: './crear-facultad.component.html',
  styleUrls: ['./crear-facultad.component.css']
})
export class CrearFacultadComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private facultadService: FacultadService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      codigo:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearFacultad(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearFacultadModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.codigo = this.GetForm['codigo'].value;
      //Llamado al servicio de identificacion de usuario
      this.facultadService.CrearFacultad(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito');
          this.router.navigate(["/parametrizacion/facultad/listar-facultad"]);
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
    }
  }

}
