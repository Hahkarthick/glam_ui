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

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
        private listing: ListingService,  private sanitizer: DomSanitizer, private router: Router) {
       const id = +this.route.snapshot.params['id'];
       this.listing.newsDescription(id).subscribe(news => {
           console.log(news);
           this.news.push(news);
       });
    }

    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }


    ngOnInit() { }
}
