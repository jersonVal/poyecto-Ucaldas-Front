import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-modalidad',
  templateUrl: './editar-modalidad.component.html',
  styleUrls: ['./editar-modalidad.component.css']
})
export class EditarModalidadComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modalidadService: ModalidadService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.BuscarRegistro();
  }

  CreateForm(){
    this.form=this.fb.group({
      _id:["",[Validators.required]],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
    })
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params['_id']
    this.modalidadService.BuscarRegistro(id).subscribe({
      next: (data:ModalidadModel)=>{
        this.form.controls['_id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    })
  }

  EditarModalidad(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new ModalidadModel();
      modelo._id = this.GetForm['_id'].value;
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.modalidadService.EditarModalidad(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(["/parametrizacion/modalidad/listar-modalidad"]);
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
