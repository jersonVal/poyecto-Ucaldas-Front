import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipoComiteModel } from 'src/app/modelos/parametrizacion/tipo-comite/tipo-comite.model';
import { TipoComiteService } from 'src/app/servicios/parametrizacion/tipo-comite.service';

@Component({
  selector: 'app-listar-tipo-comite',
  templateUrl: './listar-tipo-comite.component.html',
  styleUrls: ['./listar-tipo-comite.component.css']
})
export class ListarTipoComiteComponent implements OnInit {

  recordList: TipoComiteModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private tipoComiteService: TipoComiteService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.tipoComiteService.getRecord().subscribe(
      {
        next: (data: TipoComiteModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
