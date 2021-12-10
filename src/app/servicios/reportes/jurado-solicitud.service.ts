import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { CredencialesAsociarJuradoSolicitudModel } from 'src/app/modelos/reportes/credenciales-jurado-solicitud.model';
import { Observable } from 'rxjs';
import { JuradoSolicitudModel } from 'src/app/modelos/reportes/jurado-solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class JuradoSolicitudService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearJuradoSolicitud(modelo:CredencialesAsociarJuradoSolicitudModel):Observable<any>{
    return this.http.post(`${this.url}/asociar-jurado-con-solicitud-resultado`,{
      arreglo_jurados: modelo.jurado,
      id_solicitudResultado: modelo.solicitud,
      fechaInvitacion: modelo.fechaInvitacion,
      fechaRespuesta: modelo.fechaRespuesta,
      observaciones: modelo.observaciones,
      id_estado: modelo.estado
    })
  }
  getRecord(){
    return this.http.get<JuradoSolicitudModel[]>(`${this.url}/solicitud-jurados`);
  }

  EliminarSolicitudJurado(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/solicitud-jurados/${_id}`,{
      
    })
  }

  BuscarRegistro(_id: string):Observable<JuradoSolicitudModel>{
    return this.http.get<JuradoSolicitudModel>(`${this.url}/solicitud-jurados/${_id}`);
  }
}
