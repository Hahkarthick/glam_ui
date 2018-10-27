import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class ListingService {

  constructor(public http: Http) { }

  private token = 'glam';

  listBlog() {
    return this.http.post('../php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listEvents() {
    return this.http.post('../php_rest_api/glam.php?action=list_events', this.token)
      .map(res => res.json());
  }
  listVideos() {
    return this.http.post('../php_rest_api/glam.php?action=list_videos', this.token)
      .map(res => res.json());
  }
  listGallery() {
    return this.http.post('../php_rest_api/glam.php?action=list_gallery', this.token)
      .map(res => res.json());
  }
  listNews() {
    return this.http.post('../php_rest_api/glam.php?action=list_news', this.token)
      .map(res => res.json());
  }

  blogDescription(id) {
    return this.http.post('../php_rest_api/glam.php?action=blog_description&id=' + id, this.token)
    .map(res => res.json());
  }

  eventsDescription(id) {
    return this.http.post('../php_rest_api/glam.php?action=event_description&id=' + id, this.token)
    .map(res => res.json());
  }

  newsDescription(id) {
    return this.http.post('../php_rest_api/glam.php?action=news_description&id=' + id, this.token)
    .map(res => res.json());
  }

  videoDescription(id) {
    return this.http.post('../php_rest_api/glam.php?action=video_description&id=' + id, this.token)
    .map(res => res.json());
  }

  galleryDescription(id) {
    return this.http.post('../php_rest_api/glam.php?action=gallery_description&id=' + id, this.token)
    .map(res => res.json());
  }

}
