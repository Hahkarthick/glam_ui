import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ListingService } from '../../service/listing.service';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss'],
    animations: [routerTransition()]
})
export class NewsComponent implements OnInit, AfterViewInit {

    protected news;

    constructor(private renderer: Renderer2, private listing: ListingService) {
        this.listing.listNews().subscribe(news => {
            console.log(news);
            this.news = news;
        });
    }

    ngAfterViewInit() { }
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

    ngOnInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
}
