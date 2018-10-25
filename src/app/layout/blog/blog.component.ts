import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ListingService } from '../../service/listing.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    animations: [routerTransition()]
})
export class BlogComponent implements OnInit, AfterViewInit {

    protected blogs;

    constructor(private renderer: Renderer2, private listing: ListingService) {

        this.listing.listBlog().subscribe(blogs => {
            console.log(blogs[0].id);
            this.blogs = blogs;
        });

    }



    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
    /*  public isAuthenticated(): boolean {
            // get the token
            const token = this.getToken();
            // return a boolean reflecting
            // whether or not the token is expired
            // return tokenNotExpired(null, token);
            return true;
        }
    */

    ngOnInit() { }
}
