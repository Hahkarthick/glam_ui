import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-eventlisting',
    templateUrl: './eventListing.component.html',
    styleUrls: ['./eventListing.component.scss'],
    animations: [routerTransition()]
})
export class EventListingComponent implements OnInit, AfterViewInit {

    protected events: Array<any> = [];

    constructor(private renderer: Renderer2, private listing: ListingService,  private sanitizer: DomSanitizer, private router: Router) {

/*         this.events.push(
            {
                event_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CvP92martxs'),
                event_contents : "If you've never heard of Mr. Nori's Magic Gel or Nuru Massage, then you're in for a treat! Watch " +
                                 "me and my partner Raphael review Magic Gel for the first time."
            }
        ); */
    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }
}
