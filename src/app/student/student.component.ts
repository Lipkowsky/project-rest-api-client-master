import {Component, OnInit} from '@angular/core';
import {StudentService} from './student.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  constructor(public studentService: StudentService, private route: ActivatedRoute, private router: Router,
              private authenticationService: AuthenticationService) {
  }

  student: any;
  isLoggedIn = false;
  role!: any;
  projekty : any[] = [];

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    // if (!this.isLoggedIn) {
    //   this.router.navigate(['/login']);
    // } else {
    //   this.role = this.authenticationService.getRole();
    //   if (this.role === 'ROLE_USER') {
    //     this.router.navigate(['/projekty']);
    //   }
    // }
    this.route.params.subscribe(data => {
      this.getStudent(data.student_id);
      this.getProjekty(data.student_id);
    });
  }

  getStudent(student_id: number) {
    this.student = this.studentService.getStudent(student_id).subscribe(data => {
      this.student = data;
      console.log(this.student);
    });
  }

  getProjekty(student_id: number) {
    this.studentService.getProjekty(student_id).subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        let projekt = this.studentService.projektDetails(data[i].projektId);
        projekt.subscribe(data2 => {
          console.log("Projekt: ", data2);
          this.projekty[i] = data2;
        });
      }
    });
  }


  handleLogout() {
    this.authenticationService.logout();
  }
}
