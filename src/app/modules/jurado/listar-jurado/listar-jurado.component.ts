import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JuradoModel } from 'src/app/modelos/jurado/jurado.model';
import { JuradoService } from 'src/app/servicios/jurado/jurado.service';

@Component({
  selector: 'app-listar-jurado',
  templateUrl: './listar-jurado.component.html',
  styleUrls: ['./listar-jurado.component.css']
})
export class ListarJuradoComponent implements OnInit {

  recordList: JuradoModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private juradoService: JuradoService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.juradoService.getRecord().subscribe(
      {
        next: (data: JuradoModel[])=>{
          this.recordList = data
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
