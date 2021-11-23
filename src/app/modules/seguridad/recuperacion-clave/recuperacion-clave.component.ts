import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralData} from 'src/app/config/general-data';


@Component({
  selector: 'app-recuperacion-clave',
  templateUrl: './recuperacion-clave.component.html',
  styleUrls: ['./recuperacion-clave.component.css']
})
export class RecuperacionClaveComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder
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

}
