import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../service/listing.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
    selector: 'app-newslisting',
    templateUrl: './newsListing.component.html',
    styleUrls: ['./newsListing.component.scss'],
    animations: [routerTransition()]
})
export class NewsListingComponent implements OnInit, AfterViewInit {

    protected news: Array<any> = [];
    protected comment: any;
    protected prev: Number;
    protected next: Number;
    private checkbox: boolean;
    private newsId: any;
    protected likes: any;
    private comnts: Number;
    private err: string;
    private success: string;
    comments: FormGroup;

    constructor(private renderer: Renderer2, private route: ActivatedRoute,
        private listing: ListingService,  private sanitizer: DomSanitizer, private router: Router,  public fb: FormBuilder) {
            const id = this.route.snapshot.params['id'];
            this.comments = this.fb.group({
                cmnt: ['', Validators.required],
                userID: [''],
                newsId: ['']
            });
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
        const userCookies = document.cookie.match(/Id[^;]+/);
        const value = userCookies[0].split('=');
        this.listing.newsDescription(id).subscribe(news => {
            this.news.push(news);
            this.next = parseInt(news.id, 10) + 1;
            this.prev = parseInt(news.id, 10) - 1;
        });
        const data = [
            id,
            value[1]
        ];

        this.listing.newsCheckLike(data).subscribe(result => {
            if (result['COUNT(*)'] > 0) {
                document.getElementById('likes').classList.add('fa-heart-active');
                console.log(result);
                this.checkbox = true;
            } else {
                this.checkbox = false;
            }
        });
        this.likesCount(data);
        this.commentCount(data);
        this.commentList(data);
        this.comments.patchValue({
            newsId: id,
            userID: value[1]
        });
        console.log(this.comment);
    }

    likesCount(data) {
        this.listing.newsLikes(data).subscribe(newsLikes => {
            this.likes = newsLikes['COUNT(*)'];
        });
    }

    commentCount(data) {
        this.listing.newsCommentCount(data).subscribe(commentCount => {
            this.comnts = commentCount['COUNT(*)'];
        });
    }
    commentList(data) {
        this.listing.newsCommentList(data).subscribe(commentList => {
            this.comment = commentList;
           // console.log(commentList);
        });
    }

    changed = (evt) => {
        const id = this.route.snapshot.params['id'];
        const userCookies = document.cookie.match(/Id[^;]+/);
        const value = userCookies[0].split('=');
        const action = this.checkbox;
        const data = [
            id,
            value[1]
        ];
        if (action) {
            this.checkbox = false;
            this.listing.removeNewsLikes(data).subscribe(addLikes => {
                document.getElementById('likes').classList.remove('fa-heart-active');
                this.likesCount(data);
            });
        } else {
            this.checkbox = true;
            this.listing.addNewsLikes(data).subscribe(addLikes => {
                document.getElementById('likes').classList.add('fa-heart-active');
                this.likesCount(data);
            });
        }
    }
    get cmnt() { return this.comments.controls; }
    onSubmit() {
        const data = this.comments.value;
        this.listing.addNewsComments(data).subscribe(addcmnts => {
            console.log(addcmnts);
            if (isNaN(addcmnts)) {
                document.getElementById('err').classList.add('alert-danger');
                this.err = data;
            } else {
                document.getElementById('success').classList.add('alert-success');
                this.success = 'Posted succesfully';
                location.reload(true);
            }
        });
    }
}



// WEBPACK FOOTER //
// ./src/app/layout/newsListing/newsListing.component.ts