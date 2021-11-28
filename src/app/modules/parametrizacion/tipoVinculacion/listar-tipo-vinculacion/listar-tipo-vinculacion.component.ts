import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TipoVinculacionModel } from 'src/app/modelos/parametrizacion/tipo-vinculacion/tipo-vinculacion.model';
import { TipoVinculacionService } from 'src/app/servicios/parametrizacion/tipo-vinculacion.service';

@Component({
  selector: 'app-listar-tipo-vinculacion',
  templateUrl: './listar-tipo-vinculacion.component.html',
  styleUrls: ['./listar-tipo-vinculacion.component.css']
})
export class ListarTipoVinculacionComponent implements OnInit {

  recordList: TipoVinculacionModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private tipoVinculacionService: TipoVinculacionService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.tipoVinculacionService.getRecord().subscribe(
      {
        next: (data: TipoVinculacionModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
