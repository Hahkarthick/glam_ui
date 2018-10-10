import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, Event, NavigationStart, NavigationError, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    pushRightClass = 'push-right';
    closeResult: string;
    constructor(private translate: TranslateService, public router: Router) {

        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        router.events.subscribe((event: Event) => {

            if (event instanceof NavigationStart) {
                // Show loading indicator
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator
                if (this.collapse === 'open') {
                    document.getElementById('navbtn').click();
                }
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });


    }
    collapse = 'closed';

    toggleCollapse() {
        this.collapse = this.collapse === 'open' ? 'closed' : 'open';
    }
    openModal() {
        document.getElementById('myModal').style.display = 'block';
    }
    modal_close() {
        document.getElementById('myModal').style.display = 'none';
    }
    ngOnInit() { }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    changeLang(language: string) {
        this.translate.use(language);
    }
}
