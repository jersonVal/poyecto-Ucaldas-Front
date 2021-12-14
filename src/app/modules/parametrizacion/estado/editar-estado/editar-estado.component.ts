import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private estadoService: EstadoService,
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
      tipo:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  BuscarRegistro(){
    let _id = this.route.snapshot.params["_id"];
    this.estadoService.BuscarRegistro(_id).subscribe({
      next: (data: EstadoModel) => {
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['tipo'].setValue(data.tipo)
      }
    })
  }

  EditarEstado(){
      let modelo = new EstadoModel();
      modelo.tipo = this.GetForm['tipo'].value;
      modelo._id = this.GetForm['_id'].value;
      //Llamado al servicio de identificacion de usuario
      this.estadoService.EditarEstado(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(["/parametrizacion/estado/listar-estado"])
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      
  }

}
