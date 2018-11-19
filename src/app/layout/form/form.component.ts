import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
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
export class FormComponent implements OnInit, AfterViewInit {
    loginErrorMsg: String;
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
        const email = this.user.email;
        if (pass === cnfpass) {
            if (pass.length > 5) {
                if (validateEmail(email)) {
                    this.services.createUsers(this.user)
                    .subscribe(user => {
                        if (user === 0) {
                            error(user);
                        } else {
                            successMsg.textContent = 'User Created!!';
                            window.scrollTo(0, 0);
                            successMsg.classList.add('success', 'alert-success');
                            window.setTimeout(function () {
                                window.location.reload(true);
                            }, 3000);
                        }
                    });
                } else {
                    error('Enter a Valid Email address');
                }
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
        function validateEmail(emails) {
            const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return regexp.test(String(email).toLowerCase());
        }
    }
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
    onLogin(): void {
        const email = this.login.email;
        const loginErrorMsg = document.getElementById('lerror');
        if (validateEmail(email)) {
            this.services.verifyUser(this.login)
                .subscribe(login => {
                    console.log(login);
                    if (login.status === 'Success') {
                        const date = new Date();
                        const expTime = dateAdd(date, 'hour', 1);
                        document.cookie = 'user=true; expires=' + expTime + '; path=/';
                        // document.cookie = 'user=true; expires=' + expTime + '; path=/; HttpOnly=true';
                        window.location.href = '/';
                    } else {
                        error('Incorrect Username or Password');
                    }
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
                });
        } else {
            error('Enter a Valid Email address');
        }
        function error(message) {
            loginErrorMsg.textContent = message;
            window.scrollTo(0, 0);
            loginErrorMsg.classList.add('alert', 'alert-danger');
        }
        function validateEmail(emails) {
            const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            return regexp.test(String(emails).toLowerCase());
        }
    }
    constructor(public services: UserService, private renderer: Renderer2) { }
    ngOnInit() { }
    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
}

