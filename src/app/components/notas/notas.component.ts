import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(public _req: RequestsService) { 
    this._req.obtenerDocumentos().subscribe((documents:any[]) => {
      console.log(documents);
    });
    
  }

  ngOnInit(): void {
  }

  

}
