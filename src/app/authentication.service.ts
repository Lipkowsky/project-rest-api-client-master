import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

  public username!: String;
  public password!: String;

  constructor(private http: HttpClient) {

  }


  getRole() {
    const role = sessionStorage.getItem('myrole');
    return role;
  }

  getIdStudent() {
    const role = sessionStorage.getItem('myidstudent');
    return role;
  }

  setRole() {
    return this.http.get(`https://localhost:8443/api/myrole`, {responseType: 'text'}).subscribe(res => {
      sessionStorage.setItem('myrole', res);
    });
  }

  setIdStudent() {
    return this.http.get(`https://localhost:8443/api/myidstudent`, {responseType: 'text'}).subscribe(res => {
      sessionStorage.setItem('myidstudent', res);
    });
  }

  authenticationService(username: String, password: String) {
    return this.http.get(`https://localhost:8443/api/login`,
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map((res) => {
      this.username = username;
      this.password = password;
      this.registerSuccessfulLogin(username.toString(), password.toString());
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(username: string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    sessionStorage.setItem('token', this.createBasicAuthToken(username, password));
    console.log('sucess');
    this.setRole();
    this.setIdStudent();
  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('myrole');
    this.username = '';
    this.password = '';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token');
    if (user === null) {
      return false;
    }
    return true;
  }

}
