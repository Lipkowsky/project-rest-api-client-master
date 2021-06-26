import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DodajProjektService {
  url = 'https://localhost:8443/api/';

  constructor(private http: HttpClient) {
  }

  dodajProjekt(nazwaProjektu: string, opisProjektu: string, oddanieProjektu: string) {

    let options = {};

    return this.http.post<any>(this.url + 'addProjekt?nazwa=' + nazwaProjektu + '&opis=' + opisProjektu + '&oddanie=' + oddanieProjektu, {options});
  }

}
