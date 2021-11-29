import { Injectable } from '@angular/core';
import { JuradoModel} from '../../modelos/jurado/jurado.model';
import { GeneralData} from '../../config/general-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuradoService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  getRecord(){
    return this.http.get<JuradoModel[]>(`${this.url}/jurados`);
  }
  BuscarRegistro(id:string):Observable<JuradoModel>{
    return this.http.get(`${this.url}/jurados/${id}`,{
      
    })
  }

  EditarProponente(modelo:JuradoModel):Observable<JuradoModel>{
    return this.http.put(`${this.url}/jurados/${modelo._id}`,{
      _id:modelo._id,
      nombre: modelo.nombre,
      apellidos: modelo.apellidos,
      telefono: modelo.telefono?.toString(),
      correo: modelo.correo,
      entidad: modelo.entidad
    })
  }

  EliminarJurado(_id: string): Observable<any>{
    return this.http.delete(`${this.url}/jurados/${_id}`,{
      
    })
  }

}
