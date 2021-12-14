import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  facultades: FacultadModel[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private facultadService: FacultadService,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.InitSelect();
    this.CreateForm();
    this.BuscarRegistro();
  }

  InitSelect(){
    this.facultadService.getRecord().subscribe({
      next: (data: FacultadModel[])=>{
        this.facultades = data
        setTimeout(()=> {
          InitSelectById('facultad');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    
  }

  CreateForm(){
    this.form=this.fb.group({
      _id:["",[Validators.required]],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      facultad:["",[Validators.required]]
    })
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params['_id']
    this.departamentoService.BuscarRegistro(id).subscribe({
      next: (data:DepartamentoModel)=>{
        this.form.controls['_id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['facultad'].setValue(data.id_facultad);
      }
    })
  }

  EditarDepartamento(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new DepartamentoModel();
      modelo._id = this.GetForm['_id'].value;
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.id_facultad = this.GetForm['facultad'].value;
      //Llamado al servicio de identificacion de usuario
      this.departamentoService.EditarDepartamento(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(["/parametrizacion/departamento/listar-departamento"]);
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
    }
  }
  get GetForm(){
    return this.form.controls;
  }

}
