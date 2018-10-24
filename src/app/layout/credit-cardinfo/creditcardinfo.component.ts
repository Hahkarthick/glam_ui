import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { CardInfo } from '../credit-cardinfo/cardInfo';

@Component({
    selector: 'app-creditcardinfo',
    templateUrl: './creditcardinfo.component.html',
    styleUrls: ['./creditcardinfo.component.scss'],
    animations: [routerTransition()]
})
export class CreditcardinfoComponent implements OnInit {
    // bar chart

    cardInfo = new CardInfo();
    constructor(public modalService: NgbModal, private router: Router) { }
    openVerticallyCentered(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    login() {
        // Check the login details
        // this.logindetails.validateadmin(this.login)
        //     .subscribe(login => {
        // this.result = login;
        // if (login.status === 'Success') {
            localStorage.setItem('isLoggedin', 'true');
            this.router.navigate(['/home']);
        // } else {
        //    this.errorMsg = login;
        //    console.log(this.errorMsg);
        // }
        //  });
    }
    ngOnInit() { }
}
