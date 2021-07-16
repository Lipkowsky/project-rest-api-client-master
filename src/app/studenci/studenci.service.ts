import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class StudenciService {
  url = 'http://localhost:8080/api/';
  role: string | null = '';
  idS: string | null = '';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getAllStudents() {
    return this.http.get<any>(this.url + 'studenci');
  }

  usunStudenta(studentId: number) {
    console.log('LINK', this.url + 'usunStudenta/' + studentId);
    return this.http.get<any>(this.url + 'usunStudenta/' + studentId);
  }
}
