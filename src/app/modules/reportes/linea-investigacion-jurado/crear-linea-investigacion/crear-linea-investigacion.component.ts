import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';



declare const OpenGeneralModal: any;
declare const InitSelectById: any;

@Component({
  selector: 'app-crear-linea-investigacion',
  templateUrl: './crear-linea-investigacion.component.html',
  styleUrls: ['./crear-linea-investigacion.component.css']
})
export class CrearLineaInvestigacionComponent implements OnInit {


  form: FormGroup = new FormGroup({});
  lineasInvestigacion: LineaInvestigacionModel[] = [];
  juradoSelect: JuradoModel[] = [];
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
