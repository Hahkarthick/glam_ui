import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Form } from '../form/form';

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

    errorMsg: string;
    successMsg: string;
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
        console.log(pass.length);
        if (pass.length < 5) {
            if (pass === cnfpass) {
                success();
            } else {
                error('Password Mismatch');
            }
        } else {
            error('Password Must Minimum 6 characters');
        }
        function error(message) {
            this.errorMsg = message;
            errorMsg.classList.add('alert alert-danger');
        }
        function success() {
            this.services.createUsers(this.user)
                .subscribe(user => {
                    this.successMsg = 'User Created!!';
                });
        }

    }
    constructor(public services: UserService) {

    }
    ngOnInit() { }
}

