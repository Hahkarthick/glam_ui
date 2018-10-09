import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { routerTransition } from '../../router.animations';

import { OrderServiceService } from '../../service/order-service.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()]
})
export class HomeComponent implements OnInit, AfterViewInit {
    constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    /* Works like window.load */
    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.background =
            'url("../assets/images/pexels-photo-245388.jpeg")no-repeat scroll center top';
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundSize = '100% 100%';
        // this.renderer.setStyle(document.body, 'background-color', 'yellow');


    }


    /* Works like document.load */
    ngOnInit() {

    }



}
