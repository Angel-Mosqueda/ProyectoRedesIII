import { Component } from '@angular/core';
import { RequestsService } from '../app/services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front';

  constructor(private _rq: RequestsService) {

  }

  ngOnInit() {
    if(!this._rq._afAuth === null){
      console.log("Si esta logueado en app component");
    }else{
      console.log("No esta logueado en app component");
    }
    
  }
}
