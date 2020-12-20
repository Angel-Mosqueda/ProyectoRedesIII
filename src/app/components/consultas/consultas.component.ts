import { Component, OnInit } from '@angular/core';
import { Globals } from '../../interface/globals.interface';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  globals: Globals;
  constructor(globals: Globals) { 
    this.globals = globals;
  }

  ngOnInit(): void {
    this.globals.esSemestre = false;
  }

}
