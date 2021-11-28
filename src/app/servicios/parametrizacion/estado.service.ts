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
}
