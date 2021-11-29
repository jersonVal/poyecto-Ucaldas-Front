import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesCrearRolModel } from 'src/app/modelos/parametrizacion/rol/credenciales-rol.model';
import { RolModel } from 'src/app/modelos/parametrizacion/rol/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  url: string = GeneralData.ADMIN_USER_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearRol(modelo:CredencialesCrearRolModel):Observable<any>{
    return this.http.post(`${this.url}/rols`,{
      nombre: modelo.nombre
    })
  }

  getRecord(){
    return this.http.get<RolModel[]>(`${this.url}/rols`);
  }
}
