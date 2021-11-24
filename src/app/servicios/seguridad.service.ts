import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesUsuarioModel} from '../modelos/credenciales-usuario.model'
import { CredencialesRecuperarClaveModel } from '../modelos/credenciales-recuperar-clave.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url: string = GeneralData.ADMIN_USER_URL;
  constructor(
    private http: HttpClient
  ) { }

  Login(modelo:CredencialesUsuarioModel):Observable<any>{

    return this.http.post(`${this.url}/identificar-usuario`,{
      usuario: modelo.username,
      clave: modelo.password
    })
  }
  
  RecuperarClave(modelo:CredencialesRecuperarClaveModel):Observable<any>{
    return this.http.post(`${this.url}/recuperar-clave`,{
      usuario:modelo.username
    })
  }

}