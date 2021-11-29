import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-linea-investigacion',
  templateUrl: './editar-linea-investigacion.component.html',
  styleUrls: ['./editar-linea-investigacion.component.css']
})
export class EditarLineaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private lineaInvestigacionService: LineaInvestigacionService,
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
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.lineaInvestigacionService.BuscarRegistro(_id).subscribe({
      next: (data: LineaInvestigacionModel) => {
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['nombre'].setValue(data.nombre)
      }
    })
  }

  EditarLineaInvestigacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new LineaInvestigacionModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo._id = this.GetForm['_id'].value;
      //Llamado al servicio de identificacion de usuario
      this.lineaInvestigacionService.EditarLineaInvestigacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/linea-investigacion/listar-linea-investigacion"])
    }
  }

}
