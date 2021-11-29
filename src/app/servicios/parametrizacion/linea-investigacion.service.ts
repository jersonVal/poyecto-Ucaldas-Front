import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearLineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/credenciales-linea-investigacion.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';

@Injectable({
  providedIn: 'root'
})
export class LineaInvestigacionService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearLineaInvestigacion(modelo:CredencialesCrearLineaInvestigacionModel):Observable<any>{
    return this.http.post(`${this.url}/linea-investigacions`,{
      nombre: modelo.nombre,
    })
  }

  getRecord(){
    return this.http.get<LineaInvestigacionModel[]>(`${this.url}/linea-investigacions`);
  }

  BuscarRegistro(_id: string): Observable<LineaInvestigacionModel>{
    return this.http.get<LineaInvestigacionModel>(`${this.url}/linea-investigacions/${_id}`)
  }

  EditarLineaInvestigacion(modelo:LineaInvestigacionModel):Observable<LineaInvestigacionModel>{
    return this.http.put<LineaInvestigacionModel>(`${this.url}/linea-investigacions/${modelo._id}`,{
      nombre: modelo.nombre
    })
  }

  RemoveLineaInvestigacion(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/linea-investigacions/${_id}`,{
    })
  }
}
