import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { User } from '../layout/form/user';
import { Login } from '../layout/form/login';

@Injectable()
export class UserService {

  private message = 'v!neyardc@kes';

  constructor(public http: Http) { }

  createUsers(user: User) {
    return this.http.post('php_rest_api/glam.php?action=insert_users', user)
      .map(res => res.json());
  }
  verifyUser(login: Login) {
    return this.http.post('php_rest_api/glam.php?action=verify_user', login)
      .map(res => res.json());
  }
}
