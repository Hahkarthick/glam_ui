import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
    animations: [routerTransition()]
})
export class EventComponent implements OnInit, AfterViewInit {

    protected events: Array<any> = [];

    constructor(private renderer: Renderer2) {
        this.events.push(
            {
                event_image: '../../../assets/images/blog_1.png',
                image_alt: 'event_1_image',
                event_title: '5 Ways to Break Out of a Sexual Rut',
                event_count: '1',
                event_po_date: '10/09/2018',
                event_cmnt_count: '10',
                event_likes_count: '150'
            },
            {
                event_image: '../../../assets/images/blog_2.jpg',
                image_alt: 'event_2_image',
                event_title: 'Sex Position of the Week: A King’s Feast',
                event_count: '2',
                event_po_date: '10/09/2018',
                event_cmnt_count: '25',
                event_likes_count: '175'
            },
            {
                event_image: '../../../assets/images/blog_3.jpg',
                image_alt: 'event_3_image',
                event_title: 'Sex Positions for Your First Time',
                event_count: '3',
                event_po_date: '11/09/2018',
                event_cmnt_count: '99',
                event_likes_count: '600'
            },
            {
                event_image: '../../../assets/images/blog_4.png',
                image_alt: 'event_4_image',
                event_title: 'Body To Body: Mr. Nori Magic Gel Review',
                event_count: '4',
                event_po_date: '12/09/2018',
                event_cmnt_count: '70',
                event_likes_count: '550'
            },
            {
                event_image: '../../../assets/images/blog_5.jpg',
                image_alt: 'event_5_image',
                event_title: '5 Ways to Spice Up Masturbation',
                event_count: '5',
                event_po_date: '11/09/2018',
                event_cmnt_count: '50',
                event_likes_count: '180'
            },
            {
                event_image: '../../../assets/images/blog_6.jpg',
                image_alt: 'event_6_image',
                event_title: 'Fetish Training: My Experience with Edging',
                event_count: '6',
                event_po_date: '13/09/2018',
                event_cmnt_count: '20',
                event_likes_count: '50'
            }
        );
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
