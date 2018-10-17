import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-bloglisting',
    templateUrl: './blogListing.component.html',
    styleUrls: ['./blogListing.component.scss'],
    animations: [routerTransition()]
})
export class BlogListingComponent implements OnInit, AfterViewInit {

    protected blogs: Array<any> = [];

    constructor(private renderer: Renderer2, private listing: ListingService, private sanitizer: DomSanitizer, private router: Router) {

/*         this.blogs.push(
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
        ); */
    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }
}
