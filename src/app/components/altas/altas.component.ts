import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-altas',
  templateUrl: './altas.component.html',
  styleUrls: ['./altas.component.css']
})
export class AltasComponent implements OnInit {
  formulario: FormGroup;
  submitted = false;
  file: File;
  fcreacion: Date;
  month: string;

  constructor(private formBuilder: FormBuilder,private _rs: RequestsService) { }

  ngOnInit(): void {
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

  enviarFormulario() {
    this.submitted = true;
    if (this.formulario.invalid) {
      return;
    } else {
      this.fcreacion = new Date();
      if(this.fcreacion.getMonth().toString() === '0' ){
        this.month = '1';
      }else if(this.fcreacion.getMonth().toString() === '1' ){
        this.month = '2';
      }else if(this.fcreacion.getMonth().toString() === '2' ){
        this.month = '3';
      }else if(this.fcreacion.getMonth().toString() === '3' ){
        this.month = '4';
      }else if(this.fcreacion.getMonth().toString() === '4' ){
        this.month = '5';
      }else if(this.fcreacion.getMonth().toString() === '5' ){
        this.month = '6';
      }else if(this.fcreacion.getMonth().toString() === '6' ){
        this.month = '7';
      }else if(this.fcreacion.getMonth().toString() === '7' ){
        this.month = '8';
      }else if(this.fcreacion.getMonth().toString() === '8' ){
        this.month = '9';
      }else if(this.fcreacion.getMonth().toString() === '9' ){
        this.month = '10';
      }else if(this.fcreacion.getMonth().toString() === '10' ){
        this.month = '11';
      }else if(this.fcreacion.getMonth().toString() === '11' ){
        this.month = '12';
      }
      
      let documento: any = {
        descripcion: this.formulario.controls['descripcion'].value,
        fecha_creacion: this.fcreacion.getFullYear().toString() + '-' + this.month + '-' + this.fcreacion.getDate().toString(), //+ '-' + new Date().setMonth.toString + '-' + new Date().setDate.toString,
        fecha_entrega: this.formulario.controls['fecha_archivo'].value,
        materia: this.formulario.controls['materia'].value,
        nombre_archivo: this.formulario.controls['nombre'].value,
        nombre_profesor: this.formulario.controls['nombreProf'].value,
        semestre: this.formulario.controls['semestre'].value,
        url: 'afsfssasfa'
      }

      this._rs.agregarDocumento(documento).then(()=> {
        console.log("archivo almacenado");
        alert("Documento almacenado exitosamente.");
        window.location.href = "/home";
      }).catch((err) => console.log('error', err));
      
    }

  }

}
