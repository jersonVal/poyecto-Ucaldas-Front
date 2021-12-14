import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralData} from 'src/app/config/general-data';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';
import { TipoSolicitudService } from 'src/app/servicios/parametrizacion/tipo-solicitud.service';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';
import { CredencialesCrearSolicitudModel } from 'src/app/modelos/solicitud/credenciales-crear-solicitud.model';
import {BussinessService} from 'src/app/servicios/bussiness.service'
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { CargarFotoModel } from 'src/app/modelos/proponente/cargar_foto.model';
import { SolicitudService } from 'src/app/servicios/solicitud/solicitud.service';



declare const OpenGeneralModal: any;
declare const InitSelectById: any;
@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  formFile: FormGroup = new FormGroup({});
  url: string = GeneralData.BUSSINESS_URL;
  cargarFilename?: string = "";
  cargarFile: boolean = false;

  proponenteData: ProponenteModel[] = [];
  modalidadData: ModalidadModel[] = [];
  tipoSolicitudData: TipoSolicitudModel[] = [];
  lineaInvestigacionData: LineaInvestigacionModel[] = [];

  constructor(
    private fb: FormBuilder,
    private bussinessService: BussinessService,
    private router: Router,
    private modalidadService: ModalidadService,
    private tipoSolicitudService: TipoSolicitudService,
    private lineaInvestigacionService: LineaInvestigacionService,
    private solicitudService: SolicitudService
  ) { }

  ngOnInit(): void {
    this.CreateForm();
    this.InitSelect();
    this.CreateFormFile();
  }

  CreateFormFile(){
    this.formFile=this.fb.group({
      file:["",[]]
    })
  }

  CreateForm(){
    this.form=this.fb.group({
      fecha:["",[Validators.required]],
      archivo:["",[Validators.required]],
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

  CrearSolicitud(){
    if(this.form.invalid){
      OpenGeneralModal('Invalido')
    }else{
      let modelo = new CredencialesCrearSolicitudModel();
      modelo.fecha = this.GetForm['fecha'].value;
      modelo.archivo = this.GetForm['archivo'].value;
      modelo.descripcion = this.GetForm['descripcion'].value;
      modelo.nombreTrabajo = this.GetForm['nombreTrabajo'].value;
      modelo.idProponente = this.GetForm['idProponente'].value;
      modelo.idTipoSolicitud = this.GetForm['idTipoSolicitud'].value;
      modelo.idModalidad = this.GetForm['idModalidad'].value;
      modelo.idLineaInvestigacion = this.GetForm['idLineaInvestigacion'].value;
      //Llamado al servicio de identificacion de usuario
      this.bussinessService.CrearSolicitud(modelo).subscribe({
        next:( data:any ) => {
          OpenGeneralModal('Creado con Exito')
          this.router.navigate(['/solicitud/listar-solicitud'])
        },
        error:( error:any ) => {
          console.log(error)
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      
    }
  }

  InitSelect(){

    this.bussinessService.getRecordProponente().subscribe({
      next: (data: EstadoModel[])=>{
        this.proponenteData = data
        setTimeout(()=> {
          InitSelectById('idProponente')
        }, 100) 
      }
    })
    InitSelectById('idEstado');
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
    InitSelectById('idModalidad');
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

  OnChangeInputFile(event: any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.formFile.controls["file"].setValue(file);
      //Asignar el valor de el file
     // this.form.controls["foto"].setValue(file.name);
      
      this.CargarImagen();
    }

  }
  CargarImagen(){
    const formData = new FormData();
    formData.append("file",this.formFile.controls["file"].value);
    //Obtener el valor de el file
    this.solicitudService.CargarFile(formData).subscribe({
      next: (data:CargarFotoModel)=>{
        this.form.controls["archivo"].setValue(data.filename);
        this.cargarFilename = data.filename;
        this.cargarFile = true;
      }
    })
  }

}
