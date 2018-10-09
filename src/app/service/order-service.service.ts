import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';


@Injectable()
export class OrderServiceService {

  private message = 'v!neyardc@kes';

  constructor(public http: Http) { }

  getOrders() {
    return this.http.get('http://localhost/php_rest_api/index.php?action=get_Order_List')
      .map(res => res.json());
  }
  getTotalOrders() {
    return this.http.get('http://localhost/php_rest_api/index.php?action=get_Total_Orders')
      .map(res => res.json());
  }

  getOrder(id) {
    return this.http.get('http://localhost/php_rest_api/index.php?action=get_OrderDetails&id=' + id)
      .map(res => res.json());
  }

}
