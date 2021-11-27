import { Injectable } from '@angular/core';
import { SessionData } from 'src/app/modelos/session-data.model'


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  GuardarSesionUsuario(data: SessionData): boolean{
    let saved = localStorage.getItem("session-data")
    if(saved){
      return false
    }else{
      let stringData = JSON.stringify(data);
      localStorage.setItem("session-data", stringData);
      return true
    }
  }

  EliminarSesionUsuario(){
    localStorage.removeItem("session-data");
  }
  
  GetToken(): string{
    let saved = localStorage.getItem("session-data");
    if (saved){
      let data = JSON.parse(saved);
      return data.token;
    }else{
      return "";
    }
  }

}
