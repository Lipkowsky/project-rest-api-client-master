import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as moment from 'moment';
import {AuthenticationService} from '../authentication.service';
import {ProjektService} from './projekt.service';

@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent implements OnInit {

  projekt: any;
  nazwa!: string;
  kolejnosc!: number;
  opis!: string;
  data: any;
  role!: any;
  isLoggedIn!: boolean;
  studenci: any;
  selected!: any;
  dodany: any;
  pliki: any;
  afterDate: any;
  zadania: any;
  studenciProjekt: any;

  constructor(public projektService: ProjektService, private router: Router, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // if (!this.isLoggedIn) {
    //
    //   this.router.navigate(['/login']);
    // } else {
    //   this.role = this.authenticationService.getRole();
    //   console.log(this.role);
    // }

    this.route.params.subscribe(data => {
      this.getProjekt(data.projekt_id);
      this.getStudenci();
      this.getZadania(data.projekt_id);
      // this.pobierzPliki(data.projekt_id);
      this.getStudenciProjekt(data.projekt_id);
    });

  }

  getProjekt(projekt_id: number) {


    this.projekt = this.projektService.getProjekt(projekt_id).subscribe(data => {
      this.projekt = data;
      console.log(this.projekt);

      const projectDate = new Date(this.projekt.dataOddania);
      console.log(projectDate);


      if (projectDate < new Date()) {
        this.afterDate = true;
      }


    });
  }

  dodajZadanieDoProjektu() {
    const momentDate = new Date(this.data);
    const formattedDate = moment(momentDate).format('YYYY-MM-DD');
    this.projektService.dodajZadanieDoProjektu(this.nazwa, this.opis, this.kolejnosc, formattedDate, this.projekt.projektId).subscribe(data => {
      console.log('data');
      console.log('Dodano zadanie do projektu');
      this.ngOnInit();
    });
  }

  usunProjekt() {
    this.projekt = this.projektService.usunProjekt(this.projekt.projektId).subscribe(data => {
      console.log('Usunięto projekt');
    });
    this.router.navigate(['/projekty']);
  }

  getStudenci() {
    this.studenci = this.projektService.getStudentci().subscribe(data => {
      this.studenci = data;
      console.log(this.studenci);
    });
  }

  getStudenciProjekt(ProjektId: number) {
    let dane = this.projektService.getStudentciProjekt(ProjektId);
    this.studenciProjekt=[];
    dane.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let student = this.projektService.student(data[i].studentId);
        student.subscribe(data2 => {
          console.log("Dane stundet",data2);
          this.studenciProjekt[i] = data2;
        });
      }
    });
  }


  getZadania(ProjektId: number) {
    this.zadania = this.projektService.ZadaniaZProjektu(ProjektId).subscribe(data => {
      this.zadania = data;
      console.log(this.zadania);
    });
  }

  dodajStudenta() {
    this.projektService.studentDoProjektu(this.selected, this.projekt.projektId).subscribe(data => {
      console.log('Dodano studenta');
    });
    this.router.navigate(['/projekty/']);
  }

  usunZProjektu(studentId: number) {
    this.projektService.usuniecieStudentaZProjektu(studentId, this.projekt.projektId).subscribe(data => {
      console.log('Usunięto projekt');
    });
    this.router.navigate(['/projekty']);
  }

  zmianaStatusuZadania(zadanieId: number, status: boolean)
  {
    if(status)
    {
      this.projektService.NieUkonczZadanie(zadanieId).subscribe(data => {
        console.log("STATUS ZADANIA",data);
      });
    }
    else {
      this.projektService.UkonczZadanie(zadanieId).subscribe(data => {
        console.log("STATUS ZADANIA",data);
      });
    }
  }

  // pobierzPliki(projekt_id: number) {
  //   this.pliki = this.projektService.pobierzPliki(projekt_id).subscribe(data => {
  //     this.pliki = data;
  //     console.log("Pliki projektu:",this.pliki);
  //   });
  // }
}
