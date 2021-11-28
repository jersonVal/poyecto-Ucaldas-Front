import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearTipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/credenciales-tipoSolicitud.model';
import { TipoSolicitudModel } from 'src/app/modelos/parametrizacion/tipoSolicitud/tipoSolicitud.model';

@Injectable({
  providedIn: 'root'
})
export class TipoSolicitudService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearTipoSolicitud(modelo:CredencialesCrearTipoSolicitudModel):Observable<any>{
    return this.http.post(`${this.url}/tipo-solicituds`,{
      formato: modelo.formato,
      nombre: modelo.nombre
    })
  }

  getRecord(){
    return this.http.get<TipoSolicitudModel[]>(`${this.url}/tipo-solicituds`);
  }
}
