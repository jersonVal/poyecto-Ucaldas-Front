import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearEstadoModel } from 'src/app/modelos/parametrizacion/estado/credenciales-estado.model';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';


@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearEstado(modelo:CredencialesCrearEstadoModel):Observable<any>{
    return this.http.post(`${this.url}/estados`,{
      tipo: modelo.tipo,
    })
  }

  getRecord(){
    return this.http.get<EstadoModel[]>(`${this.url}/estados`);
  }

  BuscarRegistro(_id: string): Observable<EstadoModel>{
    return this.http.get<EstadoModel>(`${this.url}/estados/${_id}`)
  }

  EditarEstado(modelo:EstadoModel):Observable<EstadoModel>{
    return this.http.put<EstadoModel>(`${this.url}/estados/${modelo._id}`,{
      tipo: modelo.tipo
    })
  }

  RemoveEstado(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/estados/${_id}`,{
      
    })
  }
}
