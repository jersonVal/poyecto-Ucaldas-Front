import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { CredencialesCrearFacultadModel } from 'src/app/modelos/parametrizacion/facultad/credenciales-facultad.model';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-facultad',
  templateUrl: './editar-facultad.component.html',
  styleUrls: ['./editar-facultad.component.css']
})
export class EditarFacultadComponent implements OnInit {

  
  form: FormGroup = new FormGroup({});

  constructor(
    private facultadService: FacultadService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.BuscarRegistro();
  }

  CreateForm(){
    this.form=this.fb.group({
      _id: [""],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      codigo:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  EditarFacultad(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new FacultadModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.codigo = this.GetForm['codigo'].value;
      modelo._id = this.GetForm['_id'].value;
      //Llamado al servicio de identificacion de usuario
      this.facultadService.EditarFacultad(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/facultad/listar-facultad"])
    }
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.facultadService.BuscarRegistro(_id).subscribe({
      next: (data: FacultadModel) => {
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['nombre'].setValue(data.nombre)
        this.form.controls['codigo'].setValue(data.codigo)
      }
    })
  }

  

}
