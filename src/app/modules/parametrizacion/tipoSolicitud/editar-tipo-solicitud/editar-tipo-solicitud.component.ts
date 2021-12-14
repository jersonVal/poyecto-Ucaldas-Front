import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-tipo-solicitud',
  templateUrl: './editar-tipo-solicitud.component.html',
  styleUrls: ['./editar-tipo-solicitud.component.css']
})
export class EditarTipoSolicitudComponent implements OnInit {

  formato="";
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private tipoSolicitudService: TipoSolicitudService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.BuscarRegistro();
  }
  CreateForm(){
    this.form=this.fb.group({
      _id:[""],
      formato:[""],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params['_id']
    this.tipoSolicitudService.BuscarRegistro(id).subscribe({
      next: (data:TipoSolicitudModel)=>{

        if(data.formato){
          this.formato=data.formato;
        }
        this.form.controls['_id'].setValue(data._id);
        //this.form.controls['formato'].setValue(data.formato);
        this.form.controls['nombre'].setValue(data.nombre);
      }
    })
  }

  EditarTipoSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new TipoSolicitudModel();

      if(this.GetForm['formato'].value == ''){
        modelo.formato = this.formato;
      }else{
        modelo.formato = this.GetForm['formato'].value;
      }
      modelo._id = this.GetForm['_id'].value;
      modelo.nombre = this.GetForm['nombre'].value;
      //Llamado al servicio de identificacion de usuario
      this.tipoSolicitudService.EditarTipoSolicitud(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(["/parametrizacion/tipo-solicitud/listar-tipo-solicitud"]);
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
