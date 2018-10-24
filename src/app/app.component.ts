import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { empty } from 'rxjs/Observer';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    constructor(private renderer: Renderer2) {
    }

    ngAfterViewInit() {
        if (this.isLoggedIn()) {
            document.querySelector('body').classList.remove('non-rigistered');
        } else {
            document.querySelector('body').classList.add('non-rigistered');
        }
    }
    private isLoggedIn(): boolean {
        const result = !!(localStorage.getItem('isLoggedin'));
        console.log(result);
        return result;
    }
    ngOnInit() {
    }
}
