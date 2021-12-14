import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearTipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/credenciales-crear-tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-tipo-vinculacion',
  templateUrl: './crear-tipo-vinculacion.component.html',
  styleUrls: ['./crear-tipo-vinculacion.component.css']
})
export class CrearTipoVinculacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tipoVinculacionService: TipoVinculacionService,
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

  CrearTipoVinculacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
      console.log(this.form)
    }else{
      let modelo = new CredencialesCrearTipoVinculacionModel();
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoVinculacionService.CrearTipoVinculacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
          this.router.navigate(["/parametrizacion/tipo-vinculacion/listar-tipo-vinculacion"])
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
    }
  }

}
