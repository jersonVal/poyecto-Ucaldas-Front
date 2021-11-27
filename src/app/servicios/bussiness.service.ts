import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { CredencialesCrearJuradoModel } from '../modelos/credenciales-crear-jurado.model';
import { CredencialesCrearProponenteModel} from '../modelos/credenciales-crear-proponente.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  CrearJurado(modelo:CredencialesCrearJuradoModel):Observable<any>{
    return this.http.post(`${this.url}/jurados`,{
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      telefono: modelo.telefono?.toString(),
      correo: modelo.correo,
      entidad: modelo.entidad
    })
  }


  CrearProponente(modelo:CredencialesCrearProponenteModel):Observable<any>{

    console.log(modelo)
    return this.http.post(`${this.url}/proponentes`,{
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      documento: modelo.documento,
      correo: modelo.correo,
      fechaNacimiento: modelo.fechaNacimiento,
      celular: modelo.celular,
      foto: modelo.foto,
      id_departamento: modelo.idDepartamento,
      id_tipoVinculacion: modelo.idTipoVinculacion 
    })
  }
}
