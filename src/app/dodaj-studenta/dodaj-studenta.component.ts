import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dodaj-studenta',
  templateUrl: './dodaj-studenta.component.html',
  styleUrls: ['./dodaj-studenta.component.css']
})
export class DodajStudentaComponent implements OnInit {
  imie!: string;
  nazwisko!: string;
  nrIndeksu!: number;
  email!: string;
  stacjonarny!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  dodajStudenta(){
    console.log(this.imie);
    console.log(this.nazwisko);
    console.log(this.nrIndeksu);
    console.log(this.email);
    console.log(this.stacjonarny);
  }

}
