import { Injectable } from '@angular/core';
import { SolicitudModel} from '../../modelos/solicitud/solicitud.model';
import { GeneralData} from '../../config/general-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  url: string = GeneralData.BUSSINESS_URL;

  constructor(
    private http: HttpClient
  ) { }

  getRecord(){
    return this.http.get<SolicitudModel[]>(`${this.url}/solicituds`);
  }
}
