import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { EstadoModel } from 'src/app/modelos/parametrizacion/estado/estado.model';
import { EstadoService } from 'src/app/servicios/parametrizacion/estado.service';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  recordList: EstadoModel[] = [];
  // subscripcion: Subscription = new Subscription();

  constructor(
    private estadoService: EstadoService
  ) { }

  ngOnInit(): void {
<<<<<<< HEAD
    // this.subscripcion = 
    this.GetRecord();
  }

=======
    this.GetRecord()
  }
  
>>>>>>> 62fff0fd65c7393dddd57bc0813594e573a0bccf
  GetRecord(){
    this.estadoService.getRecord().subscribe(
      {
        next: (data: EstadoModel[])=>{
          console.log(data)
          this.recordList = data
          // console.log(this.recordList)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )

  }

}
