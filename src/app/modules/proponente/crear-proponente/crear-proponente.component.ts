import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { CredencialesCrearProponenteModel } from 'src/app/modelos/proponente/credenciales-crear-proponente.model';
import {BussinessService} from 'src/app/servicios/bussiness.service';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';

declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-proponente',
  templateUrl: './crear-proponente.component.html',
  styleUrls: ['./crear-proponente.component.css']
})
export class CrearProponenteComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  dropDownDepartamento: DepartamentoModel[] = [];
  dropDownTipoVinculacion: TipoVinculacionModel[] = [];

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService,
    private router: Router,
    private departamentoService: DepartamentoService,
    private tipoVinculacionService: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.InitSelect();
    this.CreateForm();
  }

  InitSelect(){
    this.departamentoService.getRecord().subscribe({
      next: (data: DepartamentoModel[])=>{
        this.dropDownDepartamento = data
        setTimeout(()=> {
          InitSelectById('departamento');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    this.tipoVinculacionService.getRecord().subscribe({
      next: (data: TipoVinculacionModel[])=>{
        this.dropDownTipoVinculacion = data
        setTimeout(()=> {
          InitSelectById('tipoVinculacion');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  CreateForm(){
    this.form=this.fb.group({
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      apellidos:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      documento:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      correo:["",[Validators.required,Validators.email,Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      fechaNacimiento:["",[Validators.required]],
      celular:["",[Validators.required,Validators.maxLength(GeneralData.PHONE_MAX_LENGHT)]],
      foto:[""],
      idDepartamento:["617f715792854e2188063b68",[Validators.required]],
      idTipoVinculacion:["617f715792854e2188063b68",[Validators.required]]
    })
  }

  CrearProponente(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearProponenteModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.apellidos = this.GetForm['apellidos'].value;
      modelo.celular = this.GetForm['celular'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.documento = this.GetForm['documento'].value;
      modelo.fechaNacimiento = this.GetForm['fechaNacimiento'].value;
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

      this.router.navigate(["/proponente/listar-proponente"]);
    }
  }




  

  get GetForm(){
    return this.form.controls;
  }

  

}
