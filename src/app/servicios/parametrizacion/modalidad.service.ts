import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/credenciales-modalidad.model';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';

@Injectable({
  providedIn: 'root'
})
export class ModalidadService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearModalidad(modelo:CredencialesCrearModalidadModel):Observable<any>{
    return this.http.post(`${this.url}/modalidads`,{
      nombre: modelo.nombre
    })
  }

  getRecord(){
    return this.http.get<ModalidadModel[]>(`${this.url}/modalidads`);
  }
}
