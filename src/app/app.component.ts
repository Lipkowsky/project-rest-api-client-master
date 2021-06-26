import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from './authentication.service';
import {ProjektyService} from './projekty/projekty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-rest-api-client';

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  isLoggedIn = false;
  role!: any;

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (this.isLoggedIn) {
      this.role = this.authenticationService.getRole();
      console.log(this.role);
    }
  }

  logout(): void {
    this.authenticationService.logout();
    this.isLoggedIn = false;
  }
}
