import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ZadanieService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  getZadanie(zadanie_id : number) {
    return this.http.get<any>(this.url+'zadanie/'+zadanie_id);
  }

  deleteZadanie(zadanie_id : number){
    return this.http.delete(this.url + 'usunzadanie/' + zadanie_id);
  }
}
