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
    // console.log(btoa('Leologesh07@'));
    // user.password = btoa(user.password);
   // console.log((user));
    user.password = btoa(user.password);
    return this.http.post('http://localhost/php_rest_api/index.php?action=insert_users', user)
      .map(res => res.json());
  }
}
