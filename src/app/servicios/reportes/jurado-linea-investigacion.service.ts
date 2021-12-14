import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { CredencialesJuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/credenciales-jurado-linea-investigacion.model';
import { JuradoLineaInvestigacionModel } from 'src/app/modelos/reportes/jurado-linea-investigacion.model';

@Injectable({
  providedIn: 'root'
})
export class JuradoLineaInvestigacionService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearJuradoLineaInvestigacion(modelo:CredencialesJuradoLineaInvestigacionModel):Observable<any>{

    return this.http.post(`${this.url}/asociar-jurado-lineas-investigacion`,{
      id_jurado: modelo.id_jurado,
      lineas_investigacion: modelo.lineas_investigacion,
    })
  }
 
  getRecord(){
    return this.http.get<JuradoLineaInvestigacionModel[]>(`${this.url}/lineas-investigacion-jurado`);
  }

  EliminarSolicitudJurado(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/lineas-investigacion-jurado/${_id}`,{
      
    })
  }

  EditarJuradoLineaInvestigacion(modelo:JuradoLineaInvestigacionModel):Observable<JuradoLineaInvestigacionModel>{
    return this.http.put(`${this.url}/lineas-investigacion-jurado/${modelo._id}`,{
      id_jurado: modelo.id_jurado,
      id_lineaInvestigacion: modelo.id_lineaInvestigacion
    })
  } 

  BuscarRegistro(_id: string):Observable<JuradoLineaInvestigacionModel>{
    return this.http.get<JuradoLineaInvestigacionModel>(`${this.url}/lineas-investigacion-jurado/${_id}`);
  }

  EliminarJuradoLinea(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/lineas-investigacion-jurado/${_id}`,{
    })
  }
}  
