import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { Router } from '@angular/router';
import { CredencialesAsociarJuradoSolicitudModel } from 'src/app/modelos/reportes/credenciales-jurado-solicitud.model';
import { JuradoSolicitudService } from 'src/app/servicios/reportes/jurado-solicitud.service';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';


declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-jurado-solicitud',
  templateUrl: './crear-jurado-solicitud.component.html',
  styleUrls: ['./crear-jurado-solicitud.component.css']
})
export class CrearJuradoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  solicitudSelect: SolicitudModel[] = [];
  juradoSelect: JuradoModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private juradoSolicitudService: JuradoSolicitudService,
    private solicitudService: SolicitudService,
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.InitSelect();
  }

  CreateForm(){
    this.form=this.fb.group({
      idSolicitud:["",[Validators.required]],
      idJurado:["",[Validators.required]],
      fechaInvitacion:["",[Validators.required]],
      descripcion:["",[Validators.required]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  CrearJuradoSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      //OpenGeneralModal('Formulario correcto a identificar');
      let modelo = new CredencialesAsociarJuradoSolicitudModel();
      modelo.solicitud = this.GetForm['idSolicitud'].value;
      modelo.jurado = this.GetForm['idJurado'].value;
      modelo.fechaInvitacion = this.GetForm['fechaInvitacion'].value;
      modelo.observaciones = this.GetForm['descripcion'].value;
      modelo.fechaRespuesta = "";
      modelo.estado = "61b9158662192aa994739088";
      console.log(modelo)
      //Llamado al servicio de identificacion de usuario
      this.juradoSolicitudService.CrearJuradoSolicitud(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado correctamente')
          this.router.navigate(['/reportes/jurado-solicitud/listar-jurado-solicitud']);
        },
        error:( error:any ) => {
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      
    }
  }

  InitSelect(){
    this.solicitudService.getRecord().subscribe({
      next: (data: SolicitudModel[])=>{
        this.solicitudSelect = data
        setTimeout(()=> {
          InitSelectById('solicitud');
        }, 100)
        
      },
      error: (err: any) => {
        console.log(err)
      }
    })
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
  }

}
