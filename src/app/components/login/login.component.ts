import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';
import { Globals } from '../../interface/globals.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  globals: Globals;
  email: string;
  password: string;

  constructor(public _rs: RequestsService, private _router: Router, globals: Globals) {
    this.globals = globals;
   }

  ngOnInit(): void {
  }

  login(){
    this._rs.login().then( (response) =>{
      console.log("Exito");
      window.location.href = "/home";
    },(error) => {
      console.log("Falló en autenticarse");
    });
  }

  

}
