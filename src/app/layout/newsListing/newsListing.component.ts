import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../service/listing.service';
@Component({
    selector: 'app-newslisting',
    templateUrl: './newsListing.component.html',
    styleUrls: ['./newsListing.component.scss'],
    animations: [routerTransition()]
})
export class NewsListingComponent implements OnInit, AfterViewInit {

    protected news: Array<any> = [];
    protected prev: Number;
    protected next: Number;

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
        private listing: ListingService,  private sanitizer: DomSanitizer, private router: Router) {
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
            this.router.navigateByUrl('/newsListing/' + this.next);
            this.news = [];
            this.postService(this.next);
        } else {
            document.getElementById('next').style.display = 'none';
        }
    }
    previousPost() {
        if (this.prev.toString() !== 'NaN') {
            document.getElementById('next').style.display = 'block';
            this.router.navigateByUrl('/newsListing/' + this.prev);
            this.news = [];
            this.postService(this.prev);
        } else {
            document.getElementById('previous').style.display = 'none';
        }
    }
    postService(id) {
        this.listing.newsDescription(id).subscribe(news => {
            this.news.push(news);
            this.next = parseInt(news.id, 10) + 1;
            this.prev = parseInt(news.id, 10) - 1;
        });
    }
}
