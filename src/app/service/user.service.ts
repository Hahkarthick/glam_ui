import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { User } from '../layout/form/user';

@Injectable()
export class UserService {

  private message = 'v!neyardc@kes';

  constructor(public http: Http) { }

  createUsers(user: User) {
    console.log(user);
    return this.http.post('http://localhost/php_rest_api/glam.php?action=insert_users', user)
      .map(res => res.json());
  }
}
