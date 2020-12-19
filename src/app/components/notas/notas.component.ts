import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  documentos: any[] = [];
  idEliminacion: string;
  constructor(public _req: RequestsService) { 
    this._req.obtenerDocumentos().subscribe((documents:any[]) => {
      this.documentos = documents;
      console.log(this.documentos);
    });
    
  }

  ngOnInit(): void {
    this.idEliminacion = null;
  }

  obtenerID(id: string){
    this.idEliminacion = id;
  }

  eliminarDocumento(){
    this._req.eliminarDocumento(this.idEliminacion).then( (success) => {
      console.log('documento eliminado')
    }, (error) => {
      console.log("error al eliminar")
    })
  }

}
