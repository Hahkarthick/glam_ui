import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Form } from '../form/form';

import { UserService } from '../../service/user.service';
import { User } from '../form/user';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {

    errorMsg: string;
    user = new User();
    onSubmit(): void {

        this.services.createUsers(this.user)
            .subscribe(user => {

        //     firstName = this.fname;
        this.errorMsg = 'User Created!!';
         });
    }
      constructor(public services: UserService) {

      }
      ngOnInit() {}
}

