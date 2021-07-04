import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getStudent(student_id: number) {
    return this.http.get<any>(this.url + 'student?id=' + student_id);
  }

  getProjekty(student_id: number) {
    return this.http.get<any>(this.url + 'projektystudenta/' + student_id);
  }

  projektDetails(projekt_id: number) {
    return this.http.get<any>(this.url + 'projekty/' + projekt_id);
  }
}
