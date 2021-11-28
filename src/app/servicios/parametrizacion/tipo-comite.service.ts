import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearTipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/credenciales-crear-tipo-comite.model';
import { TipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/tipo-comite.model';


@Injectable({
  providedIn: 'root'
})
export class TipoComiteService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearTipoComite(modelo:CredencialesCrearTipoComiteModel):Observable<any>{
    return this.http.post(`${this.url}/tipo-comites`,{
      nombre: modelo.nombre,
    })
  }

  getRecord(){
    return this.http.get<TipoComiteModel[]>(`${this.url}/tipo-comites`);
  }
}
