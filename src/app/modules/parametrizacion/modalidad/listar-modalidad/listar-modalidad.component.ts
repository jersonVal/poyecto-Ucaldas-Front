import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';

@Component({
  selector: 'app-listar-modalidad',
  templateUrl: './listar-modalidad.component.html',
  styleUrls: ['./listar-modalidad.component.css']
})
export class ListarModalidadComponent implements OnInit {

  recordList: ModalidadModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private modalidadService: ModalidadService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.modalidadService.getRecord().subscribe(
      {
        next: (data: ModalidadModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

}
