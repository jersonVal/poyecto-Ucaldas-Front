import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { CredencialesCrearProponenteModel} from '../modelos/credenciales-crear-proponente.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BussinessService {


  //sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData())
  url: string = GeneralData.BUSSINESS_URL;
  constructor(
    private http: HttpClient
  ) { }

  CrearProponente(modelo:CredencialesCrearProponenteModel):Observable<any>{

    console.log(modelo)
    return this.http.post(`${this.url}/proponentes`,{
      primer_nombre: modelo.primerNombre,
      segundo_nombre: modelo.segundoNombre,
      primer_apellido: modelo.primerApellido,
      segundo_apellido: modelo.segundoApellido,
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
