import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    animations: [routerTransition()]
})
export class NewsComponent implements OnInit, AfterViewInit {
    constructor(private renderer: Renderer2) { }


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
