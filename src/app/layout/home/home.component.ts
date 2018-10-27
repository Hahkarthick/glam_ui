import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';


@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit, AfterViewInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    /* Works like window.load */
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.background =
            'url("assets/images/pexels-photo-245388.jpeg")no-repeat scroll center top';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = '100% 100%';
        // this.renderer.setStyle(document.body, 'background-color', 'yellow');


    }

    isLoggedIn(): boolean {
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
    /* Works like document.load */
    ngOnInit() {

    }
    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        const userCookies = document.cookie.match(/user[^;]+/);
        const value = userCookies[0].split('=');
        deleteCookie(value[0]);

        function deleteCookie(cookiename) {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            const expires = ';expires=' + d;
            const name = cookiename;
            const value = '';
            document.cookie = name + '=' + value + expires + ';';
            window.location.href = '/';
        }
    }


}
