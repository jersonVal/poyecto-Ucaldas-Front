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
  BuscarRegistro(id:string):Observable<ModalidadModel>{
    return this.http.get(`${this.url}/modalidads/${id}`,{
      
    })
  }

  EditarModalidad(modelo:ModalidadModel):Observable<ModalidadModel>{

    console.log(modelo)
    return this.http.put(`${this.url}/modalidads/${modelo._id}`,{
      _id:modelo._id,
      nombre: modelo.nombre
    });
  }
  EliminarModalidad(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/modalidads/${_id}`,{
    })
  }
}
