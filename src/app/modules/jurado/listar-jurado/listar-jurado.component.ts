import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';

@Component({
  selector: 'app-listar-jurado',
  templateUrl: './listar-jurado.component.html',
  styleUrls: ['./listar-jurado.component.css']
})
export class ListarJuradoComponent implements OnInit {


  pageSize : number = GeneralData.REGISTROS_POR_PAGINA;
  p: number = 1;
  total:number=0;
  recordList: JuradoModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.GetRecord()
  }

  GetRecord(){
    this.subscripcion = this.juradoService.getRecord().subscribe(
      {
        next: (data: JuradoModel[])=>{
          this.recordList = data;
          this.total=this.recordList.length;
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
