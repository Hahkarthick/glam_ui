import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { ListingService } from '../../service/listing.service';

@Component({
    selector: 'app-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss'],
    animations: [routerTransition()]
})
export class VideoComponent implements OnInit, AfterViewInit {

    protected videos;

    constructor(private renderer: Renderer2, private sanitizer: DomSanitizer, private listing: ListingService) {
        this.listing.listVideos().subscribe(videos => {
            this.videos = videos;
        });
/*         this.videos.push(
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/CvP92martxs')
            },
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/j7WVNptjng0')
            },
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/etv-ZiFIfPM')
            },
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/K2DAkEDm67Q')
            },
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/qQB7XMwk90I')
            },
            {
                video_source: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/SVezgWk9Tow')
            }
        ); */
    }



    ngAfterViewInit() {
        this.renderer.setStyle(document.body, 'background', 'none');
    }
    /*     public isAuthenticated(): boolean {
            // get the token
            const token = this.getToken();
            // return a boolean reflecting
            // whether or not the token is expired
            // return tokenNotExpired(null, token);
            return true;
        } */

    private isLoggedIn(): boolean {
        const result = !!(sessionStorage.getItem('jsessionid'));
        return result;
    }

    ngOnInit() { }
}
