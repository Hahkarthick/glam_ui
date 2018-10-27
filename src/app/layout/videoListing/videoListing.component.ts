import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-videolisting',
    templateUrl: './videoListing.component.html',
    styleUrls: ['./videoListing.component.scss'],
    animations: [routerTransition()]
})
export class VideoListingComponent implements OnInit, AfterViewInit {

    protected videos: Array<any> = [];

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
         private sanitizer: DomSanitizer, private listing: ListingService, private router: Router) {
        const id = +this.route.snapshot.params['id'];
        this.listing.videoDescription(id).subscribe(video => {
            console.log(video);
            this.videos.push(video);
        });

    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }
}
