import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearDepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/credenciales-departamento.model';
import { DepartamentoModel } from 'src/app/modelos/parametrizacion/departamento/departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearDepartamento(modelo:CredencialesCrearDepartamentoModel):Observable<any>{
    return this.http.post(`${this.url}/departamentos`,{
      nombre: modelo.nombre,
      id_facultad: modelo.id_facultad
    })
  }
  
 
  getRecord(){
    return this.http.get<DepartamentoModel[]>(`${this.url}/departamentos`);
  }

  BuscarRegistro(id:string):Observable<DepartamentoModel>{
    return this.http.get(`${this.url}/departamentos/${id}`,{
      
    })
  }

  EditarDepartamento(modelo:DepartamentoModel):Observable<DepartamentoModel>{

    console.log(modelo)
    return this.http.put(`${this.url}/departamentos/${modelo._id}`,{
      _id:modelo._id,
      nombre: modelo.nombre,
      id_facultad: modelo.id_facultad
    });
  }
  EliminarDepartamento(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/departamentos/${_id}`,{
      
    })
  }
}
