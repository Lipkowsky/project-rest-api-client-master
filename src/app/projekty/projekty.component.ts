import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {ProjektyService} from './projekty.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-projekty',
  templateUrl: './projekty.component.html',
  styleUrls: ['./projekty.component.css'],
})
export class ProjektyComponent implements OnInit {
  constructor(private projektService: ProjektyService, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private _snackBar: MatSnackBar) {
  }

  isLoggedIn = false;
  selected!: any;
  role!: any;
  idS!: any;

  displayedColumns: string[] = ['projektId', 'dataOddania', 'nazwa', 'dataczasUtworzenia', 'opis', 'zadania', 'dozadania', 'studenci', 'szczegoly'];
  dataSource = this.projektService.getAllProjects();


  ngOnInit(): void {
    this.getAllData();
  }

 getAllData() {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // if (!this.isLoggedIn) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.role = this.authenticationService.getRole();
    //   console.log(this.role);
    // }
    this.dataSource.subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let zadania = this.projektService.ZadaniaZProjektu(data[i].projektId);
        zadania.subscribe(data2 => {
          data[i].zadania = data2;
        });
      }
      for (let i = 0; i < data.length; i++) {
        let studenci = this.projektService.StudenciZProjektu(data[i].projektId);
        studenci.subscribe(data2 => {
          const zbior = new Array();
          for (let j = 0; j < data2.length; j++) {
            let student = this.projektService.StudentDetails(data2[j].studentId);
            student.subscribe(s => {
              zbior[j] = s;
            });
          }
          data[i].studenci = zbior;
        });
      }
      console.log('dane', data);
      this.dataSource = data;
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Spróbuj ponownie', {
      duration: 2000,
      panelClass: ['warning']
    });
  }

  doZadania() {
    if (this.selected == null && this.selected == undefined) {
      this.openSnackBar('Wybierz zadanie');
    } else {

      this.router.navigate(['/zadanie/' + this.selected]);
    }


  }


  handleLogout() {
    this.authenticationService.logout();
  }

}

