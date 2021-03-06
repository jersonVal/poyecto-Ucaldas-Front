import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { CredencialesCrearJuradoModel } from '../modelos/jurado/credenciales-crear-jurado.model';
import { CredencialesCrearProponenteModel} from '../modelos/proponente/credenciales-crear-proponente.model';
import { Observable } from 'rxjs';
import { CredencialesCrearSolicitudModel } from '../modelos/solicitud/credenciales-crear-solicitud.model';
import { ProponenteModel } from '../modelos/proponente/proponente.model';
import { CargarFotoModel } from '../modelos/proponente/cargar_foto.model';


@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearJurado(modelo:CredencialesCrearJuradoModel):Observable<any>{
    return this.http.post(`${this.url}/jurados`,{
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      telefono: modelo.telefono?.toString(),
      correo: modelo.correo,
      entidad: modelo.entidad
    })
  }


  CrearProponente(modelo:CredencialesCrearProponenteModel):Observable<any>{

    console.log(modelo)
    return this.http.post(`${this.url}/proponentes`,{
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      documento: modelo.documento,
      correo: modelo.correo,
      fechaNacimiento: modelo.fechaNacimiento,
      celular: modelo.celular?.toString(),
      foto: modelo.foto,
      id_departamento: modelo.idDepartamento,
      id_tipoVinculacion: modelo.idTipoVinculacion 
    })
  }

  CrearSolicitud(modelo:CredencialesCrearSolicitudModel):Observable<any>{
    return this.http.post(`${this.url}/solicituds`,{
      fecha: modelo.fecha,
      archivo: modelo.archivo,
      descripcion: modelo.descripcion,
      nombreTrabajo: modelo.nombreTrabajo,
      id_proponente: modelo.idProponente,
      id_tipoSolicitud: modelo.idTipoSolicitud,
      id_modalidad: modelo.idModalidad,
      id_lineaInvestigacion: modelo.idLineaInvestigacion
    })
  }

  getRecordProponente(){
    return this.http.get<ProponenteModel[]>(`${this.url}/proponentes`);
  }

  BuscarRegistro(id:string):Observable<ProponenteModel>{
    return this.http.get(`${this.url}/proponentes/${id}`,{
      
    })
  }

  EditarProponente(modelo:ProponenteModel):Observable<ProponenteModel>{

    console.log(modelo)
    return this.http.put(`${this.url}/proponentes/${modelo._id}`,{
      _id:modelo._id,
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      documento: modelo.documento,
      correo: modelo.correo,
      fechaNacimiento: modelo.fechaNacimiento,
      celular: modelo.celular?.toString(),
      foto: modelo.foto,
      id_departamento: modelo.id_departamento,
      id_tipoVinculacion: modelo.id_tipoVinculacion 
    });
  }
  EliminarProponente(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/proponentes/${_id}`,{
      
    })
  }
  CargarFileProponente(formData: FormData):Observable<CargarFotoModel>{
    return this.http.post<CargarFotoModel>(`${this.url}/CargarImagenPrincipalProponente`,
    formData
    )

  }

}

