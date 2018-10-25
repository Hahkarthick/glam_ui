import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private renderer: Renderer2) {
    }

    ngAfterViewInit() { }

    private isLoggedIn(): boolean {
        const userCookies = document.cookie.match(/user[^;]+/);
        if (userCookies) {
            const value = userCookies[0].split('=');
            if (value[1] === 'true') {
                return true;
            }
            return false;
        }
        return false;
    }
    ngOnInit() {
        if (this.isLoggedIn()) {
            console.log('loggedin');
            document.querySelector('body').classList.remove('non-rigistered');
        } else {
            console.log('Not Loggedin');
            document.querySelector('body').classList.add('non-rigistered');
        }
    }
}
