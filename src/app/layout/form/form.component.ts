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
                        successMsg.classList.add('success', 'alert-success');
                        successMsg.scrollIntoView(true);
                    });
            } else {
                error('Password Must Minimum 6 characters');
            }
        } else {
            error('Password Mismatch');
        }
        function error(message) {
            errorMsg.textContent = message;
            errorMsg.classList.add('alert', 'alert-danger');
            errorMsg.scrollIntoView(true);
        }

    }
    constructor(public services: UserService) {  }
    ngOnInit() { }
}

