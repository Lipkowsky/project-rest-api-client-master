import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ProjektyService {
  url = 'http://localhost:8080/api/';
  role: string | null = '';
  idS: string | null = '';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllProjects() {
    this.role = this.authenticationService.getRole();
    console.log('ZNALEZIONA ROLA:', this.role);
    if (this.role === 'ROLE_USER') {
      this.idS = this.authenticationService.getIdStudent();
      return this.http.get<any>(this.url + 'projekty-student/' + this.idS);
    } else {
      let dane=this.http.get<any>(this.url + 'projekty');
      

      return dane;
    }
  }

  ZadaniaZProjektu(projekt_id: number) {
    return this.http.get<any>(this.url + 'zadania-z-projektu/' + projekt_id);
  }

  StudenciZProjektu(projekt_id: number) {
    return this.http.get<any>(this.url + 'studencizprojektu/' + projekt_id);
  }

  StudentDetails(student_id:number){
    return this.http.get<any>(this.url + 'student?id=' + student_id);
  }
}


