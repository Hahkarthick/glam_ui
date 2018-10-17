import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import { Login } from '../login/login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
     login = new Login();
     errorMsg: any[];

/*     onLoggedin() {
        // Check the login details
        this.logindetails.validateadmin(this.login)
            .subscribe(login => {
               // this.result = login;
                if (login.status === 'Success') {
                localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/dashboard']);
                } else {
                    this.errorMsg = login;
                    console.log(this.errorMsg);
            }
         });
    } */
    constructor(
        private router: Router
    ) {}

    ngOnInit() {}

}
