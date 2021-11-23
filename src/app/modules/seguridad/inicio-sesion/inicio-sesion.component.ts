import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  CreateForm(){
    this.form=this.fb.group({
      username:["",[Validators.required, Validators.email, Validators.minLength(8)]],
      password:["",[Validators.required,Validators.minLength(5)]]
    })
  }

}
