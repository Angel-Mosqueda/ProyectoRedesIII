import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltasComponent } from './components/altas/altas.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { HomeComponent } from './components/home/home.component';
import { NotasComponent } from './components/notas/notas.component';
import { SemestresComponent } from './components/semestres/semestres.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  { path:'', component:LoginComponent },
  { path:'home', component:HomeComponent},
  { path:'consultas', component:ConsultasComponent },
  { path:'notas', component:NotasComponent },
  { path:'semestres', component:SemestresComponent },
  { path: 'altas', component:AltasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
