import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearTipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/credenciales-crear-tipo-vinculacion.model';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';

@Injectable({
  providedIn: 'root'
})
export class TipoVinculacionService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearTipoVinculacion(modelo:CredencialesCrearTipoVinculacionModel):Observable<any>{
    return this.http.post(`${this.url}/tipo-vinculacion`,{
      nombre: modelo.nombre,
    })
  }

  getRecord(){
    return this.http.get<TipoVinculacionModel[]>(`${this.url}/tipo-vinculacion`);
  }

  BuscarRegistro(_id: string): Observable<TipoVinculacionModel>{
    return this.http.get<TipoVinculacionModel>(`${this.url}/tipo-vinculacion/${_id}`)
  }

  EditarTipoVinculacion(modelo:TipoVinculacionModel):Observable<TipoVinculacionModel>{
    return this.http.put<TipoVinculacionModel>(`${this.url}/tipo-vinculacion/${modelo._id}`,{
      nombre: modelo.nombre
    })
  }

  RemoveTipoVinculacion(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/tipo-vinculacion/${_id}`,{
    })
  }
}
