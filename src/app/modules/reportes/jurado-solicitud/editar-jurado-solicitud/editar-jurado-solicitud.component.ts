import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoSolicitudModel } from 'src/app/modelos/reportes/jurado-solicitud.model';
import { JuradoSolicitudService } from 'src/app/servicios/reportes/jurado-solicitud.service';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';


declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-jurado-solicitud',
  templateUrl: './editar-jurado-solicitud.component.html',
  styleUrls: ['./editar-jurado-solicitud.component.css']
})
export class EditarJuradoSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  solicitudSelect: SolicitudModel[] = [];
  juradoSelect: JuradoModel[] = [];
  estadoSelect: EstadoModel[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private juradoSolicitudService: JuradoSolicitudService,
    private solicitudService: SolicitudService,
    private juradoService: JuradoService,
    private estadoService: EstadoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.InitSelect()
    this.CreateForm()
    this.ObtenerReportes()
  }

  CreateForm(){
    this.form=this.fb.group({
      _id:[""],
      idSolicitud:["",[Validators.required]],
      idJurado:["",[Validators.required]],
      fechaInvitacion:["",[Validators.required]],
      descripcion:["",[Validators.required]],
      fechaRespuesta: [""],
      idEstado: [""]
    })
  }

  get GetForm(){
    return this.form.controls;
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

    this.estadoService.getRecord().subscribe({
      next: (data: EstadoModel[])=>{
        this.estadoSelect = data
        console.log(this.estadoSelect)
        setTimeout(()=> {
          InitSelectById('estado');
        }, 100)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }


  ObtenerReportes(){
    let _id = this.route.snapshot.params["_id"];
    this.juradoSolicitudService.BuscarRegistro(_id).subscribe({
      next: (data: JuradoSolicitudModel) => {        
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['idSolicitud'].setValue(data.id_solicitudJuradoResultado)
        this.form.controls['idJurado'].setValue(data.id_jurado)
        this.form.controls['fechaInvitacion'].setValue(data.fechaInvitacion)
        this.form.controls['fechaRespuesta'].setValue(data.fechaRespuesta)
        this.form.controls['descripcion'].setValue(data.observaciones)
        this.form.controls['idEstado'].setValue(data.id_estado)
      }
    })
  }

  EditarJuradoSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new JuradoSolicitudModel();
     
      modelo._id = this.GetForm["_id"].value;
      modelo.id_solicitudJuradoResultado = this.GetForm['idSolicitud'].value;
      modelo.id_jurado = this.GetForm['idJurado'].value;
      modelo.fechaInvitacion = this.GetForm['fechaInvitacion'].value;
      modelo.fechaRespuesta = this.GetForm['fechaRespuesta'].value;
      modelo.observaciones = this.GetForm['descripcion'].value;
      modelo.id_estado = this.GetForm['idEstado'].value;
      //Llamado al servicio de identificacion de usuario
      
      this.juradoSolicitudService.EditarJuradoSolicitud(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Editado con Exito');
          this.router.navigate(['/reportes/jurado-solicitud/listar-jurado-solicitud']);
        },
        error:( error:any ) => {
          console.log(error);
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE);
        }
      })
      // this.router.navigate(['/reportes/jurado-solicitud/listar-jurado-solicitud'])
    }
  }

}
