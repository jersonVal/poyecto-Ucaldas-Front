import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { CredencialesCrearEstadoModel } from 'src/app/modelos/parametrizacion/estado/credenciales-estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-crear-estado',
  templateUrl: './crear-estado.component.html',
  styleUrls: ['./crear-estado.component.css']
})
export class CrearEstadoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private estadoService: EstadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  CreateForm(){
    this.form=this.fb.group({
      tipo:["",[Validators.required]],
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearEstado(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
      console.log(this.form)
    }else{
      let modelo = new CredencialesCrearEstadoModel();
      modelo.tipo = this.GetForm['tipo'].value;
      //Llamado al servicio de identificacion de usuario
      this.estadoService.CrearEstado(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      this.router.navigate(["/parametrizacion/estado/listar-estado"])
    }
  }

}
