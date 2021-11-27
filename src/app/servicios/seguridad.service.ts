import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { Observable } from 'rxjs';
import { CredencialesUsuarioModel} from '../modelos/credenciales-usuario.model'
import { CredencialesRecuperarClaveModel } from '../modelos/credenciales-recuperar-clave.model';
import { CredencialesCrearUsuarioModel } from '../modelos/credenciales-crear-usuario.model';
import { CredencialesCambiarClaveModel } from '../modelos/credenciales-cambiar-clave.model';

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
      correo:modelo.username
    })
  }
  
  CrearUsuario(modelo:CredencialesCrearUsuarioModel):Observable<any>{

    console.log(modelo)
    return this.http.post(`${this.url}/usuarios`,{
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      telefono: modelo.telefono?.toString(),
      correo: modelo.correo,
      documento: modelo.documento,
      fechaNacimiento: modelo.fechaNacimiento,
      id_rol: modelo.idRol
    })
  }

  CambiarClave(modelo:CredencialesCambiarClaveModel):Observable<any>{

    console.log(modelo)
    return this.http.post(`${this.url}/cambiar-clave`,{
      correo: modelo.email,
      clave_actual: modelo.clave_actual,
      clave_nueva: modelo.clave_nueva
    })
  }

}
