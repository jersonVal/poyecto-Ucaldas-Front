import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearLineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/credenciales-linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-linea-investigacion',
  templateUrl: './crear-linea-investigacion.component.html',
  styleUrls: ['./crear-linea-investigacion.component.css']
})
export class CrearLineaInvestigacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private lineaInvestigacionService: LineaInvestigacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      nombre:["",[Validators.required]],
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearLineaInvestigacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
      console.log(this.form)
    }else{
      let modelo = new CredencialesCrearLineaInvestigacionModel();
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.lineaInvestigacionService.CrearLineaInvestigacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
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
