import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { JuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/jurado-linea-investigacion.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { JuradoLineaInvestigacionService } from 'src/app/servicios/reportes/jurado-linea-investigacion.service';


declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-linea-investigacion',
  templateUrl: './editar-linea-investigacion.component.html',
  styleUrls: ['./editar-linea-investigacion.component.css']
})
export class EditarLineaInvestigacionComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  lineasInvestigacion: LineaInvestigacionModel[] = [];
  juradoSelect: JuradoModel[] = [];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private juradoLineaInvestigacionService: JuradoLineaInvestigacionService,
    private lineaInvestigacionService: LineaInvestigacionService,
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.InitSelect()
    this.CreateForm()
    this.ObtenerReportes()
  }

  CreateForm(){
    this.form=this.fb.group({
      _id:[""],
      idJurado:["",[Validators.required]],
      lineasInvestigacion:["",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  InitSelect(){
    this.juradoService.getRecord().subscribe({
      next: (data: JuradoModel[])=>{
        this.juradoSelect = data
        setTimeout(()=> {
          InitSelectById('jurado');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })

    this.lineaInvestigacionService.getRecord().subscribe({
      next: (data: LineaInvestigacionModel[])=>{
        this.lineasInvestigacion = data
        setTimeout(()=> {
          InitSelectById('lineasInvestigacion');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    
  }

  ObtenerReportes(){
    let _id = this.route.snapshot.params["_id"];
    this.juradoLineaInvestigacionService.BuscarRegistro(_id).subscribe({
      next: (data: JuradoLineaInvestigacionModel) => {        
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['idJurado'].setValue(data.id_jurado)
        this.form.controls['lineasInvestigacion'].setValue(data.id_lineaInvestigacion)
      }
    })
  }

  EditarJuradoLineaInvestigacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new JuradoLineaInvestigacionModel();
      
      modelo._id = this.GetForm["_id"].value;
      modelo.id_jurado = this.GetForm['idJurado'].value;
      modelo.id_lineaInvestigacion = this.GetForm['lineasInvestigacion'].value;
      //Llamado al servicio de identificacion de usuario
      console.log(modelo)
      this.juradoLineaInvestigacionService.EditarJuradoLineaInvestigacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito')
          this.router.navigate(['/reportes/lineas-de-investigacion-de-jurado/listar-linea-investigacion-jurado']);
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      // this.router.navigate(['/reportes/lineas-de-investigacion-de-jurado/listar-linea-investigacion-jurado']);
    }
  }

}
