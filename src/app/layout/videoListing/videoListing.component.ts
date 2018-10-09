import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
    selector: 'app-videolisting',
    templateUrl: './videoListing.component.html',
    styleUrls: ['./videoListing.component.scss'],
    animations: [routerTransition()]
})
export class VideoListingComponent implements OnInit, AfterViewInit {

    protected videos: Array<any> = [];

    constructor(private renderer: Renderer2, private sanitizer: DomSanitizer, private router: Router) {

        this.videos.push(
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CvP92martxs'),
                video_contents : "If you've never heard of Mr. Nori's Magic Gel or Nuru Massage, then you're in for a treat! Watch " +
                                 "me and my partner Raphael review Magic Gel for the first time."
            }
        );
    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }
}
