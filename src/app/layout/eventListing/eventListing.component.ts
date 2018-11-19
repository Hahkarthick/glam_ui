import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-eventlisting',
    templateUrl: './eventListing.component.html',
    styleUrls: ['./eventListing.component.scss'],
    animations: [routerTransition()]
})
export class EventListingComponent implements OnInit, AfterViewInit {

    protected events;
    protected prev: Number;
    protected next: Number;

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
         private listing: ListingService,  private sanitizer: DomSanitizer, private router: Router) {
        const id = this.route.snapshot.params['id'];
        console.log(id);
        this.postService(id);
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

    nextPost() {
        console.log('welcome' + this.next);
        if (this.next.toString() !== 'NaN') {
            document.getElementById('previous').style.display = 'block';
            this.router.navigateByUrl('/newsListing/' + this.next);
            this.events = [];
            this.postService(this.next);
        } else {
            document.getElementById('next').style.display = 'none';
        }
    }
    previousPost() {
        if (this.prev.toString() !== 'NaN') {
            document.getElementById('next').style.display = 'block';
            this.router.navigateByUrl('/newsListing/' + this.prev);
            this.events = [];
            this.postService(this.prev);
        } else {
            document.getElementById('previous').style.display = 'none';
        }
    }
    postService(id) {
        this.listing.eventsDescription(id).subscribe(event => {
            this.events.push(event);
            this.next = parseInt(event.id, 10) + 1;
            this.prev = parseInt(event.id, 10) - 1;
        });
    }
}
