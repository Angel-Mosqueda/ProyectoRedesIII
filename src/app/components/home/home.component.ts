import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../services/requests.service';
import { Router } from '@angular/router';
import { Globals } from '../../interface/globals.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  globals: Globals;
  constructor(public _rs: RequestsService, private _router: Router, globals: Globals) {
    this.globals = globals;
   }

  ngOnInit(): void {
  }

  logout(){
    this._rs.logout().then((response) =>{
      console.log("Logout");
      window.location.href = "/";
    },(error) => {
      console.log("Falló en dar logout");
    })
  }

}
