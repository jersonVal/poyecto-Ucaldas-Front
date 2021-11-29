import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RolModel } from 'src/app/modelos/parametrizacion/rol/rol.model';
import { RolService } from 'src/app/servicios/parametrizacion/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.css']
})
export class ListarRolComponent implements OnInit {

  recordList: RolModel[] = [];
  subscripcion: Subscription = new Subscription();

  constructor(
    private rolService: RolService
  ) { }

  ngOnInit(): void {
    this.subscripcion = this.rolService.getRecord().subscribe(
      {
        next: (data: RolModel[])=>{
          this.recordList = data
        },
        error: (err: any) => {
          console.log(err)
        }
      }
    )
  }

}
