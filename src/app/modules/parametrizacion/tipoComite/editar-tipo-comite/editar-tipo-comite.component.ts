import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/tipo-comite.model';
import { TipoComiteService } from 'src/app/servicios/parametrizacion/tipo-comite.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-tipo-comite',
  templateUrl: './editar-tipo-comite.component.html',
  styleUrls: ['./editar-tipo-comite.component.css']
})
export class EditarTipoComiteComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private tipoComiteService: TipoComiteService,
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
    this.tipoComiteService.BuscarRegistro(_id).subscribe({
      next: (data: TipoComiteModel) => {
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['nombre'].setValue(data.nombre)
      }
    })
  }

  EditarTipoComite(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new TipoComiteModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo._id = this.GetForm['_id'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoComiteService.EditarTipoComite(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(["/parametrizacion/tipo-comite/listar-tipo-comite"])
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
    }
  }

}
