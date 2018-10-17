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

    protected blogs: Array<any> = [];

    constructor(private renderer: Renderer2, private listing: ListingService ) {

    this.listing.listBlog().subscribe(blogs => {
        this.blogs = blogs;
        console.log(blogs);
    });
    /*
       this.blogs.push(
            {
                blog_image: '../../../assets/images/blog_1.png',
                image_alt: 'blog_1_image',
                blog_title: '5 Ways to Break Out of a Sexual Rut',
                blog_count: '1',
                blog_po_date: '10/09/2018',
                blog_cmnt_count: '10',
                blog_likes_count: '150'
            },
            {
                blog_image: '../../../assets/images/blog_2.jpg',
                image_alt: 'blog_2_image',
                blog_title: 'Sex Position of the Week: A King’s Feast',
                blog_count: '2',
                blog_po_date: '10/09/2018',
                blog_cmnt_count: '25',
                blog_likes_count: '175'
            },
            {
                blog_image: '../../../assets/images/blog_3.jpg',
                image_alt: 'blog_3_image',
                blog_title: 'Sex Positions for Your First Time',
                blog_count: '3',
                blog_po_date: '11/09/2018',
                blog_cmnt_count: '99',
                blog_likes_count: '600'
            },
            {
                blog_image: '../../../assets/images/blog_4.png',
                image_alt: 'blog_4_image',
                blog_title: 'Body To Body: Mr. Nori Magic Gel Review',
                blog_count: '4',
                blog_po_date: '12/09/2018',
                blog_cmnt_count: '70',
                blog_likes_count: '550'
            },
            {
                blog_image: '../../../assets/images/blog_5.jpg',
                image_alt: 'blog_5_image',
                blog_title: '5 Ways to Spice Up Masturbation',
                blog_count: '5',
                blog_po_date: '11/09/2018',
                blog_cmnt_count: '50',
                blog_likes_count: '180'
            },
            {
                blog_image: '../../../assets/images/blog_6.jpg',
                image_alt: 'blog_6_image',
                blog_title: 'Fetish Training: My Experience with Edging',
                blog_count: '6',
                blog_po_date: '13/09/2018',
                blog_cmnt_count: '20',
                blog_likes_count: '50'
            }
        );
    */
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
