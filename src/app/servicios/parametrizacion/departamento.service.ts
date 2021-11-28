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
}
