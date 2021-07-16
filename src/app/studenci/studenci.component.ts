import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {StudenciService} from './studenci.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-studenci',
  templateUrl: './studenci.component.html',
  styleUrls: ['./studenci.component.css']
})
export class StudenciComponent implements OnInit {
  student: any;

  constructor(private studenciService: StudenciService, private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private _snackBar: MatSnackBar) {
  }

  displayedColumns: string[] = ['studentId', 'imie', 'nazwisko', 'nrIndeksu', 'email', 'stacjonarny', 'przycisk'];
  dataSource = this.studenciService.getAllStudents();

  ngOnInit(): void {

  }

  usunStudenta(studentId: number) {
    this.studenciService.usunStudenta(studentId).subscribe(data => {
      console.log('usuwanie',data);
    });
    window.location.reload();
  }
}
