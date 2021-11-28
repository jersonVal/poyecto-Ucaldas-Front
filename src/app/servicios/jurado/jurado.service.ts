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
}
