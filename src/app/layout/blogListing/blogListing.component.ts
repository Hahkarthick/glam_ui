import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-bloglisting',
    templateUrl: './blogListing.component.html',
    styleUrls: ['./blogListing.component.scss'],
    animations: [routerTransition()]
})
export class BlogListingComponent implements OnInit, AfterViewInit {
    protected blogs: Array<any> = [];
    protected prev: Number;
    protected next: Number;
    constructor(
        private renderer: Renderer2,
        private route: ActivatedRoute,
        private listing: ListingService,
        private sanitizer: DomSanitizer,
        private router: Router) {
        const id = this.route.snapshot.params['id'];
        console.log(id);
        this.postService(id);
        /*
            this.blogs.push(
            {
                blog_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CvP92martxs'),
                blog_contents : 'He was a complete gentleman as he held the sheet up so I could turn over onto my back.' +
                                ' He covered me from my chest to my sides. We were alone in the room at this point but if' +
                                ' someone had walked in it would have looked completely innocent. Everything he did was oh-so ' +
                                ' subtle.He was a complete gentleman as he held the sheet up so I could turn over onto my back. ' +
                                ' He covered me from my chest to my sides. We were alone in the room at this point but if someone' +
                                ' had walked in it would have looked completely innocent. Everything he did was oh-so subtle.He was ' +
                                ' a complete gentleman as he held the sheet up so I could turn over onto my back. He covered me from my ' +
                                ' chest to my sides. We were alone in the room at this point but if someone had walked in it would have  ' +
                                ' looked completely innocent. Everything he did was oh-so subtle.'
            }
            );
        */
    }


    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
    ngOnInit() {

    }
    nextPost() {
        console.log('welcome' + this.next);
        if (this.next.toString() !== 'NaN') {
            document.getElementById('previous').style.display = 'block';
            this.router.navigateByUrl('/blogListing/' + this.next);
            this.blogs = [];
            this.postService(this.next);
        } else {
            document.getElementById('next').style.display = 'none';
        }
    }
    previousPost() {
        if (this.prev.toString() !== 'NaN') {
            document.getElementById('next').style.display = 'block';
            this.router.navigateByUrl('/blogListing/' + this.prev);
            this.blogs = [];
            this.postService(this.prev);
        } else {
            document.getElementById('previous').style.display = 'none';
        }
    }
    postService(id) {
        this.listing.blogDescription(id).subscribe(blog => {
            console.log(blog);
            this.blogs.push(blog);
            this.next = parseInt(blog.id, 10) + 1;
            this.prev = parseInt(blog.id, 10) - 1;
        });
    }
}
