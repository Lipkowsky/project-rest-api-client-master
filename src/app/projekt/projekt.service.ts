import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjektService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {
  }

  getProjekt(projekt_id: number) {
    return this.http.get<any>(this.url + 'projekty/' + projekt_id);
  }

  dodajZadanieDoProjektu(nazwaZadania: string, opisZadania: string, kolejnoscZadania: number, oddanieZadania: string, idProjektu: number) {

    let options = {};

    return this.http.post<any>(this.url + 'addzadanie?nazwa=' + nazwaZadania + '&opis=' + opisZadania + '&kolejnosc=' + kolejnoscZadania + '&oddanie=' + oddanieZadania + '&idProjektu=' + idProjektu, {options});
  }

  usunProjekt(idProjektu: number) {
    return this.http.delete(this.url + 'usunProjekt/' + idProjektu);
  }

  getStudentci() {
    return this.http.get<any>(this.url + 'studenci/');
  }

  student(idStudent: number) {
    return this.http.get<any>(this.url + 'student?id=' + idStudent);
  }

  getStudentciProjekt(idProjektu: number) {
    return this.http.get<any>(this.url + 'studencizprojektu/' + idProjektu);
  }

  studentDoProjektu(student_id: number, projekt_id: number) {
    let options = {};
    return this.http.post<any>(this.url + 'stud-do-proj/' + student_id + '/' + projekt_id, {options});
  }

  usuniecieStudentaZProjektu(student_id: number, projekt_id: number) {
    return this.http.delete(this.url + 'usunZProjektu/' + projekt_id + '/' + student_id);
  }

  ZadaniaZProjektu(projekt_id: number) {
    return this.http.get<any>(this.url + 'zadania-z-projektu/' + projekt_id);
  }

  UkonczZadanie(zadanie_id: number) {
    return this.http.get<any>(this.url + 'zakoncz/' + zadanie_id);
  }

  NieUkonczZadanie(zadanie_id: number) {
    return this.http.get<any>(this.url + 'niezakonczone/' + zadanie_id);
  }

  // pobierzPliki(projekt_id: number) {
  //   return this.http.get<any>('https://localhost:8443/files?projekt_id=' + projekt_id);
  // }
}
