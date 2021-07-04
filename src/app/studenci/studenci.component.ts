import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-studenci',
  templateUrl: './studenci.component.html',
  styleUrls: ['./studenci.component.css']
})
export class StudenciComponent implements OnInit {
  imie!: string;
  nazwisko!: string;



  constructor() { }

  ngOnInit(): void {

  }


  dodajStudenta(){
    console.log(this.imie);
  }
}
