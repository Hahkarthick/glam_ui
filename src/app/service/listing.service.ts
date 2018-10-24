import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class ListingService {

  constructor(public http: Http) { }

  private token = 'glam';

  listBlog() {
    return this.http.post('http://localhost/php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listEvents() {
    return this.http.post('http://localhost/php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listVideos() {
    return this.http.post('http://localhost/php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listGallery() {
    return this.http.post('http://localhost/php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }
  listNews() {
    return this.http.post('http://localhost/php_rest_api/glam.php?action=list_blog', this.token)
      .map(res => res.json());
  }

}
