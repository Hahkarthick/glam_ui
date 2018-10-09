import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Login } from '../login/login';


@Injectable()
export class LoginService {

  constructor(public http: Http) { }
  validateadmin(login: Login) {
    // console.log(btoa('Leologesh07@'));
     // console.log((login.tokenval));
    return this.http.post('http://localhost/php_rest_api/index.php?action=check_login', login)
      .map(res => res.json());
  }
}
