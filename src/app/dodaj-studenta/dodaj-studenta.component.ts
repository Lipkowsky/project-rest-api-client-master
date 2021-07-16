import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dodaj-studenta',
  templateUrl: './dodaj-studenta.component.html',
  styleUrls: ['./dodaj-studenta.component.css']
})
export class DodajStudentaComponent implements OnInit {
  url = 'http://localhost:8080/api/';

  imie!: string;
  nazwisko!: string;
  nrIndeksu!: number;
  email!: string;
  stacjonarny: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  dodajStudenta(){
    let options = {};
    const student = {
      imie: this.imie,
      nazwisko:this.nazwisko,
      nr_indeksu: this.nrIndeksu,
      email:this.email,
      stacjonarny:this.stacjonarny
    }

    console.log(student);
    const result = this.http.post<any>(this.url + 'nowyStudent?imie=' + student.imie + '&nazwisko=' + this.nazwisko + '&nr_indeksu=' + student.nr_indeksu + '&email=' + student.email + '&stacjonarny=' + student.stacjonarny, {options});
    result.subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/studenci']);
  }



}
