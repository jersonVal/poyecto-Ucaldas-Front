import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearTipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/credenciales-crear-tipo-comite.model';
import { TipoComiteService } from 'src/app/servicios/parametrizacion/tipo-comite.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-tipo-comite',
  templateUrl: './crear-tipo-comite.component.html',
  styleUrls: ['./crear-tipo-comite.component.css']
})
export class CrearTipoComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tipoComiteService: TipoComiteService,
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

  CrearTipoComite(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
      console.log(this.form)
    }else{
      let modelo = new CredencialesCrearTipoComiteModel();
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoComiteService.CrearTipoComite(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/parametrizacion/tipo-comite/listar-tipo-comite"])
    }
  }

}
