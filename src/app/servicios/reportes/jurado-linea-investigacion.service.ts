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
    return this.http.post(`${this.url}/asociar-jurado-con-solicitud-resultado`,{
      id_jurado: modelo.id_jurado,
      id_linea_investigacion: modelo.id_linea_investigacion,
    })
  }

  getRecord(){
    return this.http.get<JuradoLineaInvestigacionModel[]>(`${this.url}/lineas-investigacion-jurado`);
  }
}
