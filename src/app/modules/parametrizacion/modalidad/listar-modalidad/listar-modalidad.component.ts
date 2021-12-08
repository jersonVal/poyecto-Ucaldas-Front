import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { ModalidadModel } from 'src/app/modelos/parametrizacion/modalidad/modalidad.model';
import { ModalidadService } from 'src/app/servicios/parametrizacion/modalidad.service';

@Component({
  selector: 'app-listar-modalidad',
  templateUrl: './listar-modalidad.component.html',
  styleUrls: ['./listar-modalidad.component.css']
})
export class ListarModalidadComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  recordList: ModalidadModel[] = [];
  // subscripcion: Subscription = new Subscription();

  constructor(
    private modalidadService: ModalidadService
  ) { }

  ngOnInit(): void {
    // this.subscripcion = 
    this.modalidadService.getRecord().subscribe(
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
