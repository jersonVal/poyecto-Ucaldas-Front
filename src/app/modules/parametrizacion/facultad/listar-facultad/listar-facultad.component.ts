import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { FacultadModel } from 'src/app/modelos/parametrizacion/facultad/facultad.model';
import { FacultadService } from 'src/app/servicios/parametrizacion/facultad.service';

@Component({
  selector: 'app-listar-facultad',
  templateUrl: './listar-facultad.component.html',
  styleUrls: ['./listar-facultad.component.css']
})
export class ListarFacultadComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  recordList: FacultadModel[] = [];
  // subscripcion: Subscription = new Subscription();

  constructor(
    private facultadService: FacultadService
  ) { }

  ngOnInit(): void {
    // this.subscripcion = 
    this.GetRecord();
  }

  GetRecord(){
    this.facultadService.getRecord().subscribe(
      {
        next: (data: FacultadModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

}
