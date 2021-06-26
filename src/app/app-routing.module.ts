import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProjektComponent } from './projekt/projekt.component';
import { ProjektyComponent } from './projekty/projekty.component';
import { ZadanieComponent } from './zadanie/zadanie.component';
import {StudentComponent} from './student/student.component';
import { DodajProjektComponent } from './dodaj-projekt/dodaj-projekt.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'projekty', component: ProjektyComponent },
  { path: 'zadanie/:zadanie_id', component: ZadanieComponent },
  { path: 'projekt/:projekt_id', component: ProjektComponent },
  { path: 'student/:student_id', component: StudentComponent},
  { path: 'dodajProjekt', component: DodajProjektComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
