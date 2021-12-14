import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-tipo-vinculacion',
  templateUrl: './editar-tipo-vinculacion.component.html',
  styleUrls: ['./editar-tipo-vinculacion.component.css']
})
export class EditarTipoVinculacionComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private tipoVinculacionService: TipoVinculacionService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.BuscarRegistro();
    this.CreateForm();
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
    this.tipoVinculacionService.BuscarRegistro(_id).subscribe({
      next: (data: TipoVinculacionModel) => {
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['nombre'].setValue(data.nombre)
      }
    })
  }

  EditarTipoVinculacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new TipoVinculacionModel();
      modelo.nombre = this.GetForm['nombre'].value;
      modelo._id = this.GetForm['_id'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoVinculacionService.EditarTipoVinculacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
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
