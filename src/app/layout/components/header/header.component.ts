import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
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
    constructor(private translate: TranslateService, public router: Router, private elementRef: ElementRef) {

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
                // console.log('changed');
                const path = window.location.href;
                const res = path.split('#/');
                // console.log(res[1]);
                const menu = document.getElementsByClassName('menu-link');
                Array.from(menu).forEach(function(element) {
                    const span = element.getElementsByTagName('span');
                    const value = span[0].textContent;
                    // console.log(value);
                    if (value.toLowerCase() === res[1].toLowerCase()) {
                        document.getElementById('ProductNav_Contents').style.display = 'block';
                        const active = document.getElementById('active');
                        active.removeAttribute('aria-selected');
                        active.removeAttribute('id');
                        const parentTag = span[0].parentElement;
                        parentTag.setAttribute('id', 'active');
                        parentTag.setAttribute('aria-selected', 'true');
                        const y = parentTag.scrollWidth;
                        const scrollcont = document.getElementById('prdNav');
                        parentTag.scrollIntoView({
                            behavior: 'auto',
                            block: 'center',
                            inline: 'center'
                        });
                    } else if (res[1].toLowerCase() === 'login') {
                        document.getElementById('ProductNav_Contents').style.display = 'none';
                    }
                  });
                /* if (this.collapse === 'open') {
                    document.getElementById('navbtn').click();
                } */
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator
                // Present error to user
                console.log(event.error);
            }
        });

    }
    collapse = 'closed';

    openNav() {
        document.getElementById('mySidenav').style.width = '70%';
        this.elementRef.nativeElement.ownerDocument.body.style.marginLeft = '70%';
    }

    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
        this.elementRef.nativeElement.ownerDocument.body.style.marginLeft = '0';
    }

    isLoggedIn(): boolean {
        const userCookies = document.cookie.match(/user[^;]+/);
        if (userCookies) {
            const value = userCookies[0].split('=');
            if (value[1] === 'true') {
                return true;
            }
            return false;
        }
        return false;
    }
    toggleCollapse() {
        this.collapse = this.collapse === 'open' ? 'closed' : 'open';
        if (this.collapse === 'open') {
            this.openNav();
        } else {
            this.closeNav();
        }
    }
    openModal() {
        document.getElementById('myModal').style.display = 'block';
    }
    modal_close() {
        document.getElementById('myModal').style.display = 'none';
    }
    ngOnInit() {
        const menu = document.getElementsByClassName('menu-link');

        Array.from(menu).forEach(function(element) {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                const active = document.getElementById('active');
                active.removeAttribute('aria-selected');
                active.removeAttribute('id');
                const current = element;
                console.log(element);
                current.setAttribute('id', 'active');
                current.setAttribute('aria-selected', 'true');
                const y = current.scrollLeft = 100;
                const Crntactive = document.getElementById('active');
            });
          });
    }

    onLoggedout() {
        // localStorage.removeItem('isLoggedin');
        const userCookies = document.cookie.match(/user[^;]+/);
        const value = userCookies[0].split('=');
        deleteCookie(value[0]);

        function deleteCookie(cookiename) {
            const d = new Date();
            d.setDate(d.getDate() - 1);
            const expires = ';expires=' + d;
            const name = cookiename;
            const value = '';
            document.cookie = name + '=' + value + expires + ';';
            window.location.href = '/';
        }
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
