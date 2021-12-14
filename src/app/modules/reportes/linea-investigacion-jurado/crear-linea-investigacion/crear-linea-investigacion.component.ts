import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { CredencialesJuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/credenciales-jurado-linea-investigacion.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { JuradoLineaInvestigacionService } from 'src/app/servicios/reportes/jurado-linea-investigacion.service';



declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-linea-investigacion',
  templateUrl: './crear-linea-investigacion.component.html',
  styleUrls: ['./crear-linea-investigacion.component.css']
})
export class CrearLineaInvestigacionComponent implements OnInit {


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
    this.CreateForm();
    this.InitSelect();
  }

  CreateForm(){
    this.form=this.fb.group({
      idJurado:["",[Validators.required]],
      lineasInvestigacion:["",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearJuradoLineaInvestigacion(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      //OpenGeneralModal('Formulario correcto a identificar');
      let modelo = new CredencialesJuradoLineaInvestigacionModel();
      modelo.id_jurado = this.GetForm['idJurado'].value;
      modelo.lineas_investigacion = this.GetForm['lineasInvestigacion'].value;
      console.log(modelo)
      //Llamado al servicio de identificacion de usuario
      this.juradoLineaInvestigacionService.CrearJuradoLineaInvestigacion(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado correctamente')
        },
        error:( error:any ) => {
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
          console.log(error)
        }
      })
      this.router.navigate(['/reportes/lineas-de-investigacion-de-jurado/listar-linea-investigacion-jurado']);
    }
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

}
