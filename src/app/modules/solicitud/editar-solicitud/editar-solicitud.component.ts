import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { SolicitudModel } from 'src/app/modelos/solicitud/solicitud.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';


declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styleUrls: ['./editar-solicitud.component.css']
})
export class EditarSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  proponenteData: ProponenteModel[] = [];
  modalidadData: ModalidadModel[] = [];
  tipoSolicitudData: TipoSolicitudModel[] = [];
  lineaInvestigacionData: LineaInvestigacionModel[] = [];
  archivo = "";

  constructor(
    private fb: FormBuilder,
    private solicitudService: SolicitudService,
    private router: Router,
    private bussinessService: BussinessService,
    private estadoService: EstadoService,
    private modalidadService: ModalidadService,
    private tipoSolicitudService: TipoSolicitudService,
    private lineaInvestigacionService: LineaInvestigacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.InitSelect();
    this.ObtenerReportes();
  }

  CreateForm(){
    this.form=this.fb.group({
      _id:[""],
      fecha:["",[Validators.required]],
      archivo:[""],
      descripcion:["",[Validators.required]],
      nombreTrabajo:["",[Validators.required,Validators.minLength(GeneralData.NAME_MIN_LENGHT)]],
      idProponente:["",[Validators.required]],
      idTipoSolicitud:["",[Validators.required]],
      idModalidad:["",[Validators.required]],
      idLineaInvestigacion:["",[Validators.required]],
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  ObtenerReportes(){
    let _id = this.route.snapshot.params["_id"];
    this.solicitudService.BuscarRegistro(_id).subscribe({
      next: (data: SolicitudModel) => {

        if(data.archivo){
          this.archivo = data.archivo
        }
        
        this.form.controls['_id'].setValue(data._id)
        this.form.controls['fecha'].setValue(data.fecha)
        this.form.controls['descripcion'].setValue(data.descripcion)
        this.form.controls['nombreTrabajo'].setValue(data.nombreTrabajo)
        this.form.controls['idProponente'].setValue(data.id_proponente)
        this.form.controls['idTipoSolicitud'].setValue(data.id_tipoSolicitud)
        this.form.controls['idModalidad'].setValue(data.id_modalidad)
        this.form.controls['idLineaInvestigacion'].setValue(data.id_lineaInvestigacion)
      }
    })
  }

  EditarSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new SolicitudModel();
     
      if(this.GetForm['archivo'].value === ""){
        modelo.archivo = this.archivo;
      }else{
        modelo.archivo = this.GetForm['archivo'].value;
      }
      modelo._id = this.GetForm["_id"].value;
      modelo.fecha = this.GetForm['fecha'].value;
      modelo.descripcion = this.GetForm['descripcion'].value;
      modelo.nombreTrabajo = this.GetForm['nombreTrabajo'].value;
      modelo.id_proponente = this.GetForm['idProponente'].value;
      modelo.id_tipoSolicitud = this.GetForm['idTipoSolicitud'].value;
      modelo.id_modalidad = this.GetForm['idModalidad'].value;
      modelo.id_lineaInvestigacion = this.GetForm['idLineaInvestigacion'].value;
      //Llamado al servicio de identificacion de usuario
      
      this.solicitudService.EditarSolicitud(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      this.router.navigate(['/solicitud/listar-solicitud'])
    }
  }

  InitSelect(){
    this.bussinessService.getRecordProponente().subscribe({
      next: (data: ProponenteModel[])=>{
        this.proponenteData = data
        setTimeout(()=> {
          InitSelectById('idProponente')
        }, 100) 
      }
    })
    // InitSelectById('idEstado');
    this.modalidadService.getRecord().subscribe({
      next: (data: ModalidadModel[])=>{
        this.modalidadData = data
        setTimeout(()=> {
          InitSelectById('idModalidad')
        }, 100) 
      },
      error: (err: any) => {
        console.log(err)
      }
    })
    // InitSelectById('idModalidad');
    this.tipoSolicitudService.getRecord().subscribe({
      next: (data: TipoSolicitudModel[])=>{
        this.tipoSolicitudData = data
        setTimeout(()=> {
          InitSelectById('idTipoSolicitud')
        }, 100) 
      }
    })
    // InitSelectById('idTipoSolicitud');
    this.lineaInvestigacionService.getRecord().subscribe({
      next: (data: LineaInvestigacionModel[])=>{
        this.lineaInvestigacionData = data
        setTimeout(()=> {
          InitSelectById('idLineaInvestigacion')
        }, 100) 
      }
    })
    // InitSelectById('idLineaInvestigacion')
  }
}
