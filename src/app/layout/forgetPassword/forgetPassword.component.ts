import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ListingService } from '../../service/listing.service';
import { User } from '../form/user';

@Component({
    selector: 'app-forgetpassword',
    templateUrl: './forgetPassword.component.html',
    styleUrls: ['./forgetPassword.component.scss'],
    animations: [routerTransition()]
})
export class ForgetPasswordComponent implements OnInit, AfterViewInit {

    protected forgetPasswords: Array<any> = [];

    constructor(private renderer: Renderer2, private listing: ListingService) {
    }
    user = new User();
    onSubmit(): void {
        const errorMsg = document.getElementById('error');
        const successMsg = document.getElementById('success');
        const email = this.user.email;
        if (validateEmail(email)) {
            successMsg.textContent = 'Password as been send to your email';
            window.scrollTo(0, 0);
            successMsg.classList.add('success', 'alert-success');
/*             this.services.createUsers(this.user)
                .subscribe(user => {
                    if (user === 0) {
                        error(user);
                    } else {
                        successMsg.textContent = 'User Created!!';
                        window.scrollTo(0, 0);
                        successMsg.classList.add('success', 'alert-success');
                        window.setTimeout(function () {
                            window.location.reload(true);]
                        }, 3000);
                    }
                }); */
        } else {
            error('Enter a Valid Email address');
        }
        function error(message) {
            errorMsg.textContent = message;
            window.scrollTo(0, 0);
            errorMsg.classList.add('alert', 'alert-danger');
        }
        function validateEmail(emails) {
            const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

            return regexp.test(String(emails).toLowerCase());
        }
    }


    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
    /*     public isAuthenticated(): boolean {
            // get the token
            const token = this.getToken();
            // return a boolean reflecting
            // whether or not the token is expired
            // return tokenNotExpired(null, token);
            return true;
        } */

    private isLoggedIn(): boolean {
        const result = !!(sessionStorage.getItem('jsessionid'));
        return result;
    }

    ngOnInit() { }
}
