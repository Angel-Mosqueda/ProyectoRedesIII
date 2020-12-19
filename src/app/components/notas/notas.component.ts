import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  documentos: any[] = [];
  idEliminacion: string;
  documento: any;
  formulario: FormGroup;
  submitted = false;
  file: File;
  fcreacion: Date;
  month: string;
  constructor(public _req: RequestsService, private formBuilder: FormBuilder) { 
    this._req.obtenerDocumentos().subscribe((documents:any[]) => {
      this.documentos = documents;
      console.log(this.documentos);
    });
    
  }

  ngOnInit(): void {
    this.idEliminacion = null;
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_archivo: ['',Validators.required],
      semestre: ['',Validators.required],
      nombreProf: ['',Validators.required],
      materia: ['',Validators.required],
      select_archivo: ['', Validators.required]
    });
  }

  fileChange(event) {
    this.file = event.target.files.item(0);
  }

  get f() { return this.formulario.controls; }

  obtenerID(id: string){
    this.idEliminacion = id;
  }

  obtenerDoc(doc: any){
    this.documento = doc;
  }

  eliminarDocumento(){
    this._req.eliminarDocumento(this.idEliminacion).then( (success) => {
      console.log('documento eliminado')
    }, (error) => {
      console.log("error al eliminar")
    })
  }

  modificarDocumento(){

    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    } else {
      this._req.modificarDocumento(this.documento).then( (success) => {
        console.log("documento modificado")
      }, (error) => {
        console.log("error al modicar")
      })
    }
  }

}
