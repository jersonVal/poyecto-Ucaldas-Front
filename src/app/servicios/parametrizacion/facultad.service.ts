import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearFacultadModel } from 'src/app/modelos/parametrizacion/facultad/credenciales-facultad.model';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearFacultad(modelo:CredencialesCrearFacultadModel):Observable<any>{
    return this.http.post(`${this.url}/facultads`,{
      nombre: modelo.nombre,
      codigo: modelo.codigo
    })
  }

  getRecord(){
    return this.http.get<FacultadModel[]>(`${this.url}/facultads`);
  }
}
