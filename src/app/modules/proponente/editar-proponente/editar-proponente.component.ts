import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';
import { DepartamentoService } from 'src/app/servicios/parametrizacion/departamento.service';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';


declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-proponente',
  templateUrl: './editar-proponente.component.html',
  styleUrls: ['./editar-proponente.component.css']
})
export class EditarProponenteComponent implements OnInit {

  foto="";
  form: FormGroup = new FormGroup({});
  dropDownDepartamento: DepartamentoModel[] = [];
  dropDownTipoVinculacion: TipoVinculacionModel[] = [];

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService,
    private router: Router,
    private departamentoService: DepartamentoService,
    private tipoVinculacionService: TipoVinculacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.InitSelect();
    this.CreateForm();
    this.BuscarRegistro();
  }

  InitSelect(){
    this.form=this.fb.group({
      idDepartamento:'fhksdhfjsfk',
      idTipoVinculacion:'fhksdhfjsfk'
    })


    this.departamentoService.getRecord().subscribe({
      next: (data: DepartamentoModel[])=>{
        this.dropDownDepartamento = data
        setTimeout(()=> {
          InitSelectById('departamento');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    this.tipoVinculacionService.getRecord().subscribe({
      next: (data: TipoVinculacionModel[])=>{
        this.dropDownTipoVinculacion = data
        setTimeout(()=> {
          InitSelectById('tipoVinculacion');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    
  }

  CreateForm(){
    this.form=this.fb.group({
      id:["",[Validators.required]],
      nombre:["",[Validators.required, Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      apellidos:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      documento:["",[Validators.required,Validators.minLength(GeneralData.PASSWORD_MIN_LENGHT)]],
      correo:["",[Validators.required,Validators.email,Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]],
      fechaNacimiento:["",[Validators.required]],
      celular:["",[Validators.required,Validators.maxLength(GeneralData.PHONE_MAX_LENGHT)]],
      foto:[""],
      idDepartamento:["",[Validators.required]],
      idTipoVinculacion:["",[Validators.required]]
    })
  }

  BuscarRegistro(){
    let id = this.route.snapshot.params['_id']
    this.bussinessService.BuscarRegistro(id).subscribe({
      next: (data:ProponenteModel)=>{

        if(data.foto){
          this.foto=data.foto;
        }
        this.form.controls['id'].setValue(data._id);
        this.form.controls['nombre'].setValue(data.nombre);
        this.form.controls['apellidos'].setValue(data.apellidos);
        this.form.controls['documento'].setValue(data.documento);
        this.form.controls['correo'].setValue(data.correo);
        this.form.controls['fechaNacimiento'].setValue(data.fechaNacimiento);
        this.form.controls['celular'].setValue(data.celular);
        // this.form.controls['foto'].setValue(data.foto);
        this.form.controls['idDepartamento'].setValue(data.id_departamento);
        this.form.controls['idTipoVinculacion'].setValue(data.id_tipoVinculacion);
      }
    })
  }

  EditarProponente(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new ProponenteModel();

      if(this.GetForm['foto'].value == ''){
        modelo.foto = this.foto;
      }else{
        modelo.foto = this.GetForm['foto'].value;
      }
      modelo._id = this.GetForm['id'].value;
      modelo.nombre = this.GetForm['nombre'].value;
      modelo.apellidos = this.GetForm['apellidos'].value;
      modelo.celular = this.GetForm['celular'].value;
      modelo.correo = this.GetForm['correo'].value;
      modelo.documento = this.GetForm['documento'].value;
      modelo.fechaNacimiento = this.GetForm['fechaNacimiento'].value;
      modelo.id_departamento = this.GetForm['idDepartamento'].value;
      modelo.id_tipoVinculacion = this.GetForm['idTipoVinculacion'].value;
      //Llamado al servicio de identificacion de usuario
      this.bussinessService.EditarProponente(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Editado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })

      this.router.navigate(["/proponente/listar-proponente"]);
    }
  }
  get GetForm(){
    return this.form.controls;
  }
}