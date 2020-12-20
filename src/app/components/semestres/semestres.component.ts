import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import {Globals } from '../../interface/globals.interface';

@Component({
  selector: 'app-semestres',
  templateUrl: './semestres.component.html',
  styleUrls: ['./semestres.component.css']
})
export class SemestresComponent implements OnInit {

  globals: Globals;
  num_semestre: string;
  algo: any;

  constructor(public _req: RequestsService, globals: Globals) { 
    this.globals=globals;
  }

  ngOnInit(): void {
  }
  
  semestre1(){
    console.log("semestre 1");
    this.num_semestre='1';
    this.enviarSemestre();
  }

  semestre2(){
    console.log("semestre 2");
    this.num_semestre='2';
    this.enviarSemestre();
  }

  semestre3(){
    console.log("semestre 3");
    this.num_semestre='3';
    this.enviarSemestre();
  }

  semestre4(){
    console.log("semestre 4");
    this.num_semestre='4';
    this.enviarSemestre();
  }

  semestre5(){
    console.log("semestre 5");
    this.num_semestre='5';
    this.enviarSemestre();
  }

  semestre6(){
    console.log("semestre 6");
    this.num_semestre='6';
    this.enviarSemestre();
  }

  semestre7(){
    console.log("semestre 7");
    this.num_semestre='7';
    this.enviarSemestre();
  }

  semestre8(){
    console.log("semestre 8");
    this.num_semestre='8';
    this.enviarSemestre();
  }

  semestre9(){
    console.log("semestre 9");
    this.num_semestre='9';
    this.enviarSemestre();
  }

  semestre10(){
    console.log("semestre 10");
    this.num_semestre='10';
    this.enviarSemestre();
  }

  enviarSemestre(){
    this.globals.num_semestre=this.num_semestre;
    this.globals.esSemestre = true;
    this._req.MostrarSemestre(this.num_semestre);
  }

}
