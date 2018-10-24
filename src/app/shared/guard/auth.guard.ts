import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    isAuthenticated(): boolean {
        // auth logic
        if (localStorage.getItem('isLoggedin') === 'true') {
            return true;
        }
        return false;
    }

    canActivate(): boolean {
        const isAuth = this.isAuthenticated();

        if (!isAuth) {
        // if not authenticated do something. e.g redirect to login  page
            // this._router.navigate(['','/login'])
            this.router.navigate(['/payments']);
            return false;
        }
        return isAuth;
    }
}
