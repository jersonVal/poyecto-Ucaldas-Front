import { Injectable } from '@angular/core';
import { SolicitudModel} from '../../modelos/solicitud/solicitud.model';
import { GeneralData} from '../../config/general-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  getRecord(){
    return this.http.get<SolicitudModel[]>(`${this.url}/solicituds`);
  }

  BuscarRegistro(_id: string):Observable<SolicitudModel>{
    return this.http.get<SolicitudModel>(`${this.url}/solicituds/${_id}`);
  }

  EditarSolicitud(modelo:SolicitudModel):Observable<SolicitudModel>{
    return this.http.put(`${this.url}/solicituds/${modelo._id}`,{
      fecha: modelo.fecha,
      archivo: modelo.archivo,
      descripcion: modelo.descripcion,
      nombreTrabajo: modelo.nombreTrabajo,
      id_estado: modelo.id_estado,
      id_tipoSolicitud: modelo.id_tipoSolicitud,
      id_modalidad: modelo.id_modalidad,
      id_lineaInvestigacion: modelo.id_lineaInvestigacion
    })
  }

  RemoveSolicitud(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/solicituds/${_id}`,{
      
    })
  }
}
