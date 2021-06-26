import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class ProjektyService {
  url = 'https://localhost:8443/api/';
  role: string | null = '';
  idS: string | null = '';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllProjects(): Observable<any> {
    this.role = this.authenticationService.getRole();
    console.log('ZNALEZIONA ROLA:', this.role);
    if (this.role === 'ROLE_USER') {
      this.idS = this.authenticationService.getIdStudent();
      return this.http.get<any>(this.url + 'projekty-student/' + this.idS);
    } else {
      return this.http.get<any>(this.url + 'projekty');
    }

  }
}


