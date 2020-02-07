import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';
import { User } from '../layout/form/user';
import { Login } from '../layout/form/login';
import { Card } from '../layout/credit-card/card';


@Injectable()
export class UserService {

  private message = 'v!neyardc@kes';
  restApiURL = environment.restApiURL;
  constructor(public http: Http) { }

  createUsers(user: User) {
    return this.http.post(this.restApiURL + '/glam.php?action=insert_users', user)
      .map(res => res.json());
  }
  verifyUser(login: Login) {
    return this.http.post(this.restApiURL + '/glam.php?action=verify_user', login)
      .map(res => res.json());
  }
  stripePayment(cardInfo: Card) {
    console.log(cardInfo);
    return this.http.post(this.restApiURL + '/glam.php?action=payment', cardInfo)
      .map(res => res.json());
  }
  listStates() {
    return this.http.post(this.restApiURL + '/glam.php?action=listStates', this.message)
    .map(res => res.json());
  }
}
