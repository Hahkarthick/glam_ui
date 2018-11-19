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
    protected prev: Number;
    protected next: Number;

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
         private sanitizer: DomSanitizer, private listing: ListingService, private router: Router) {
            const id = this.route.snapshot.params['id'];
            console.log(id);
            this.postService(id);

    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }

    nextPost() {
        console.log('welcome' + this.next);
        if (this.next.toString() !== 'NaN') {
            document.getElementById('previous').style.display = 'block';
            this.router.navigateByUrl('/videoListing/' + this.next);
            this.videos = [];
            this.postService(this.next);
        } else {
            document.getElementById('next').style.display = 'none';
        }
    }
    previousPost() {
        if (this.prev.toString() !== 'NaN') {
            document.getElementById('next').style.display = 'block';
            this.router.navigateByUrl('/videoListing/' + this.prev);
            this.videos = [];
            this.postService(this.prev);
        } else {
            document.getElementById('previous').style.display = 'none';
        }
    }
    postService(id) {
        this.listing.videoDescription(id).subscribe(video => {
            console.log(video);
            this.videos.push(video);
            this.next = parseInt(video.id, 10) + 1;
            this.prev = parseInt(video.id, 10) - 1;
        });
    }
}
