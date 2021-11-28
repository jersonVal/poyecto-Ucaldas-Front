import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProponenteModel } from 'src/app/modelos/proponente/proponente.model';
import { BussinessService } from 'src/app/servicios/bussiness.service';

@Component({
  selector: 'app-listar-proponente',
  templateUrl: './listar-proponente.component.html',
  styleUrls: ['./listar-proponente.component.css']
})
export class ListarProponenteComponent implements OnInit {

  recordList: ProponenteModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private bussinessService: BussinessService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.bussinessService.getRecordProponente().subscribe(
      {
        next: (data: ProponenteModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
