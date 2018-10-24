import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Login } from './login';

import { UserService } from '../../service/user.service';
import { User } from '../form/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    errorMsg: String;
    successMsg: String;
    user = new User();
    login = new Login();
    onSubmit(): void {
        /*         const form = new FormGroup({
                    password: new FormControl('', Validators.minLength(5)),
                    cnfpassword: new FormControl('', Validators.minLength(5)),
                  }, passwordMatchValidator);
                  function passwordMatchValidator(g: FormGroup) {
                      console.log(g.get('password'));
                     return g.get('password').value === g.get('cnfpassword').value
                        ? success : {'mismatch': true};
                  } */
        const errorMsg = document.getElementById('error');
        const successMsg = document.getElementById('success');
        const pass = this.user.password;
        const cnfpass = this.user.cnfpassword;
        if (pass === cnfpass) {
            if (pass.length > 5) {
                this.services.createUsers(this.user)
                    .subscribe(user => {
                        successMsg.textContent = 'User Created!!';
                        window.scrollTo(0, 0);
                        successMsg.classList.add('success', 'alert-success');
                        window.setTimeout(function () {
                            window.location.href = '/login';
                        }, 3000);
                    });
            } else {
                error('Password Must Minimum 6 characters');
            }
        } else {
            error('Password Mismatch');
        }
        function error(message) {
            errorMsg.textContent = message;
            window.scrollTo(0, 0);
            errorMsg.classList.add('alert', 'alert-danger');
        }

    }

    onLogin(): void {
        this.services.verifyUser(this.login)
            .subscribe(login => {
                function dateAdd(dates, interval, units) {
                    let ret = new Date(dates); // don't change original date
                    const checkRollover = function () { if (ret.getDate() !== dates.getDate()) { ret.setDate(0); } };
                    switch (interval.toLowerCase()) {
                        case 'year': ret.setFullYear(ret.getFullYear() + units); checkRollover(); break;
                        case 'quarter': ret.setMonth(ret.getMonth() + 3 * units); checkRollover(); break;
                        case 'month': ret.setMonth(ret.getMonth() + units); checkRollover(); break;
                        case 'week': ret.setDate(ret.getDate() + 7 * units); break;
                        case 'day': ret.setDate(ret.getDate() + units); break;
                        case 'hour': ret.setTime(ret.getTime() + units * 3600000); break;
                        case 'minute': ret.setTime(ret.getTime() + units * 60000); break;
                        case 'second': ret.setTime(ret.getTime() + units * 1000); break;
                        default: ret = undefined; break;
                    }
                    return ret;
                }
                const date = new Date();
                const expTime = dateAdd(date, 'hour', 1);
                /*
                * Samples
                    out('start:      ' + date);
                    out('+1 year:    ' + dateAdd(date, 'YEAR', 1));
                    out('+1 quarter: ' + dateAdd(date, 'QUARTER', 1));
                    out('+1 month:   ' + dateAdd(date, 'MONTH', 1));
                    out('+1 week:    ' + dateAdd(date, 'week', 1));
                    out('+1 day:     ' + dateAdd(date, 'day', 1));
                    out('+1 hour:    ' + dateAdd(date, 'hour', 1));
                    out('+1 minute:  ' + dateAdd(date, 'minute', 1));
                    out('+1 second:  ' + dateAdd(date, 'second', 1));
                    out('+1 garbage: ' + dateAdd(date, 'garbage', 1));
                *
                */

                /*
                    if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") == "true") {
                        alert("Do something here!");
                    }
                */

                console.log(login);
                document.cookie = 'user=true; expires=' + expTime + '; path=/; HttpOnly=true';
                window.location.href = '/';
            });
    }
    constructor(public services: UserService) { }
    ngOnInit() { }
}

