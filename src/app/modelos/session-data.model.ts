import { CredencialesCrearUsuarioModel } from './usuario/credenciales-crear-usuario.model';

export class SessionData{
    token?:string;
    usuario?: CredencialesCrearUsuarioModel;
    tieneCuenta: boolean = false;
}