import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ListingService {

  constructor(public http: Http) { }

  private token = 'glam';
  restApiURL = environment.restApiURL;

  listBlog() {
    return this.http.post(this.restApiURL + '/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listEvents() {
    return this.http.post(this.restApiURL + '/glam.php?action=list_events', this.token)
      .map(res => res.json());
  }
  listVideos() {
    return this.http.post(this.restApiURL + '/glam.php?action=list_videos', this.token)
      .map(res => res.json());
  }
  listGallery() {
    return this.http.post(this.restApiURL + '/glam.php?action=list_gallery', this.token)
      .map(res => res.json());
  }
  listNews() {
    return this.http.post(this.restApiURL + '/glam.php?action=list_news', this.token)
      .map(res => res.json());
  }

  blogDescription(id) {
    return this.http.post(this.restApiURL + '/glam.php?action=blog_description&id=' + id, this.token)
    .map(res => res.json());
  }

  eventsDescription(id) {
    return this.http.post(this.restApiURL + '/glam.php?action=event_description&id=' + id, this.token)
    .map(res => res.json());
  }

  newsDescription(id) {
    return this.http.post(this.restApiURL + '/glam.php?action=news_description&id=' + id, this.token)
    .map(res => res.json());
  }

  videoDescription(id) {
    return this.http.post(this.restApiURL + '/glam.php?action=video_description&id=' + id, this.token)
    .map(res => res.json());
  }

  galleryDescription(id) {
    return this.http.post(this.restApiURL + '/glam.php?action=gallery_description&id=' + id, this.token)
    .map(res => res.json());
  }

  blogLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=blogLikes', formData)
    .map(res => res.json());
  }
  blogCheckLike(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=blogCheckLike', formData)
    .map(res => res.json());
  }
  addBlogLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=addBlogLikes', formData)
    .map(res => res.json());
  }
  removeBlogLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=removeBlogLikes', formData)
    .map(res => res.json());
  }

  addComments(data) {
    console.log(data);
    const formData: FormData = new FormData();
    formData.append('userId', data['userID']);
    formData.append('blogId', data['blogId']);
    formData.append('description', data['cmnt']);
    return this.http.post(this.restApiURL + '/glam.php?action=blogComment', formData)
    .map(res => res.json());
  }
  blogCommentCount(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=blogCommentCount', formData)
    .map(res => res.json());
  }
  blogCommentList(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('blogId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=blogCommentList', formData)
    .map(res => res.json());
  }

  eventLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=eventLikes', formData)
    .map(res => res.json());
  }
  eventCheckLike(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=eventCheckLike', formData)
    .map(res => res.json());
  }
  addEventLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=addEventLikes', formData)
    .map(res => res.json());
  }
  removeEventLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=removeEventLikes', formData)
    .map(res => res.json());
  }

  addEventComments(data) {
    console.log(data);
    const formData: FormData = new FormData();
    formData.append('userId', data['userID']);
    formData.append('eventId', data['eventId']);
    formData.append('description', data['cmnt']);
    return this.http.post(this.restApiURL + '/glam.php?action=eventComment', formData)
    .map(res => res.json());
  }
  eventCommentCount(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=eventCommentCount', formData)
    .map(res => res.json());
  }
  eventCommentList(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('eventId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=eventCommentList', formData)
    .map(res => res.json());
  }
  newsLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=newsLikes', formData)
    .map(res => res.json());
  }
  newsCheckLike(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=newsCheckLike', formData)
    .map(res => res.json());
  }
  addNewsLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=addNewsLikes', formData)
    .map(res => res.json());
  }
  removeNewsLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=removeNewsLikes', formData)
    .map(res => res.json());
  }

  addNewsComments(data) {
    console.log(data);
    const formData: FormData = new FormData();
    formData.append('userId', data['userID']);
    formData.append('newsId', data['newsId']);
    formData.append('description', data['cmnt']);
    return this.http.post(this.restApiURL + '/glam.php?action=newsComment', formData)
    .map(res => res.json());
  }
  newsCommentCount(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=newsCommentCount', formData)
    .map(res => res.json());
  }
  newsCommentList(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('newsId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=newsCommentList', formData)
    .map(res => res.json());
  }
  videoLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=videoLikes', formData)
    .map(res => res.json());
  }
  videoCheckLike(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=videoCheckLike', formData)
    .map(res => res.json());
  }
  addVideoLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=addVideoLikes', formData)
    .map(res => res.json());
  }
  removeVideoLikes(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=removeVideoLikes', formData)
    .map(res => res.json());
  }

  addVideoComments(data) {
    console.log(data);
    const formData: FormData = new FormData();
    formData.append('userId', data['userID']);
    formData.append('videoId', data['videoId']);
    formData.append('description', data['cmnt']);
    return this.http.post(this.restApiURL + '/glam.php?action=videoComment', formData)
    .map(res => res.json());
  }
  videoCommentCount(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=videoCommentCount', formData)
    .map(res => res.json());
  }
  videoCommentList(data) {
    const formData: FormData = new FormData();
    formData.append('userId', data[1]);
    formData.append('videoId', data[0]);
    return this.http.post(this.restApiURL + '/glam.php?action=videoCommentList', formData)
    .map(res => res.json());
  }
}



// WEBPACK FOOTER //
// ./src/app/service/listing.service.ts