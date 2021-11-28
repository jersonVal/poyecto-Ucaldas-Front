import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearDepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/credenciales-departamento.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';

declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private servicioDepartamento: DepartamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.InitSelect();
  }

  CreateForm(){
    this.form=this.fb.group({
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      idDepartamento:["",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  InitSelect(){
    InitSelectById('departamento')
  }

  CrearDepartamento(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearDepartamentoModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.id_facultad = this.GetForm['idDepartamento'].value;
      //Llamado al servicio de identificacion de usuario
      this.servicioDepartamento.CrearDepartamento(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/departamento/listar-departamento"])
    }
  }

}
