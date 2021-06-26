import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {AuthenticationService} from '../authentication.service';
import {DodajProjektService} from './dodaj-projekt.service';

@Component({
  selector: 'app-dodaj-projekt',
  templateUrl: './dodaj-projekt.component.html',
  styleUrls: ['./dodaj-projekt.component.css']
})
export class DodajProjektComponent implements OnInit {
  nazwa!: string;
  opis!: string;
  data: any;
  role!: any;
  isLoggedIn!: boolean;
  projekt: any;

  constructor(public dodajProjektService: DodajProjektService, private router: Router, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.role = this.authenticationService.getRole();
      console.log(this.role);
    }
  }

  dodajProjekt() {
    const momentDate = new Date(this.data);
    const formattedDate = moment(momentDate).format('YYYY-MM-DD');
    this.dodajProjektService.dodajProjekt(this.nazwa, this.opis, formattedDate).subscribe(data => {
      console.log('data');
      console.log('Dodano zadanie do projektu');
      this.ngOnInit();
      this.router.navigate(['/projekty']);
    });
  }

}
