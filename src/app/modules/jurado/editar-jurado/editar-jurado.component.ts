import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';

declare const OpenGeneralModal: any;

@Component({
  selector: 'app-editar-jurado',
  templateUrl: './editar-jurado.component.html',
  styleUrls: ['./editar-jurado.component.css']
})
export class EditarJuradoComponent implements OnInit {

  form: FormGroup = new FormGroup({});


  constructor(
    private fb: FormBuilder,
    private juradoService: JuradoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.BuscarRegistro();
  }

  InitSelect(){
  }

  CreateForm(){
    this.form=this.fb.group({
      id:["",[Validators.required]],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      apellidos:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      telefono:["",[Validators.required]],
      correo:["",[Validators.required,Validators.email,Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      entidad:["",[Validators.required]]
    })
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params['_id']
    this.juradoService.BuscarRegistro(id).subscribe({
      next: (data:JuradoModel)=>{
        this.form.controls['id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['apellidos'].setValue(data.apellidos);
        this.form.controls['telefono'].setValue(data.telefono);
        this.form.controls['correo'].setValue(data.correo);
        this.form.controls['entidad'].setValue(data.entidad);
      }
    })
  }

  CrearJurado(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new JuradoModel();
      modelo._id = this.GetForm['id'].value;
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.apellidos = this.GetForm['apellidos'].value;
      modelo.telefono = this.GetForm['telefono'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.entidad = this.GetForm['entidad'].value;
      //Llamado al servicio de identificacion de usuario
      this.juradoService.EditarProponente(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Editado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/jurado/listar-jurado"]);
    }
  }
  get GetForm(){
    return this.form.controls;
  }
}
