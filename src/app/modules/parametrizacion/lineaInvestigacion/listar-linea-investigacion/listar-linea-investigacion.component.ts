import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LineaInvestigacionModel } from 'src/app/modelos/parametrizacion/lineaInvestigacion/linea-investigacion.model';
import { LineaInvestigacionService } from 'src/app/servicios/parametrizacion/linea-investigacion.service';

@Component({
  selector: 'app-listar-linea-investigacion',
  templateUrl: './listar-linea-investigacion.component.html',
  styleUrls: ['./listar-linea-investigacion.component.css']
})
export class ListarLineaInvestigacionComponent implements OnInit {

  recordList: LineaInvestigacionModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private lineaInvestigacionService: LineaInvestigacionService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.lineaInvestigacionService.getRecord().subscribe(
      {
        next: (data: LineaInvestigacionModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
