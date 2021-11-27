import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GeneralData} from '../config/general-data'
import { CredencialesCrearJuradoModel } from '../modelos/credenciales-crear-jurado.model';

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
}
