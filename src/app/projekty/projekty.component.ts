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
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.role = this.authenticationService.getRole();
      console.log(this.role);
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message,'Spróbuj ponownie', {
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

