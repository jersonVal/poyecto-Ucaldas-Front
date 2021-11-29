import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { CredencialesRecuperarClaveModel } from 'src/app/modelos/seguridad/credenciales-recuperar-clave.model';
import { Router } from '@angular/router';


declare const OpenGeneralModal: any;

@Component({
  selector: 'app-recuperacion-clave',
  templateUrl: './recuperacion-clave.component.html',
  styleUrls: ['./recuperacion-clave.component.css']
})
export class RecuperacionClaveComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CreateForm();

  }

  CreateForm(){
    this.form=this.fb.group({
      username:["",[Validators.required, Validators.email, Validators.minLength(GeneralData.EMAIL_MIN_LENGHT)]]
    })
  }

  get GetForm(){
    return this.form.controls;
  }

  RecuperarClave(){
    if(this.form.invalid){
      OpenGeneralModal("Formulario invalido")
    }else{
      let modelo = new CredencialesRecuperarClaveModel();
      modelo.username = this.GetForm['username'].value;
      //Llamado al servicio de identificacion de usuario
      this.servicioSeguridad.RecuperarClave(modelo).subscribe({
        next:( data:any ) => {
          console.log(data)
          OpenGeneralModal('Contraseña cambiada con exito')
        },
        error:( error:any ) => {
          OpenGeneralModal(GeneralData.GENERAL_ERROR_MESSAGE)
        }
      })
      this.router.navigate(['/home']);
    }
  }

}
