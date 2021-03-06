import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'login', loadChildren: './form/form.module#FormModule' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
            { path: 'payments', loadChildren: './payment/payment.module#PaymentModule' },
            { path: 'creditcard', loadChildren: './credit-card/creditcard.module#CreditcardModule' },
            { path: 'creditcardinfo', loadChildren: './credit-cardinfo/creditcardinfo.module#CreditcardinfoModule' },
            { path: 'news', loadChildren: './news/news.module#NewsModule' },
            { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
            { path: 'events', loadChildren: './events/event.module#EventModule' },
            { path: 'forgetPassword', loadChildren: './forgetPassword/forgetPassword.module#ForgetPasswordModule' },
            { path: 'video', loadChildren: './video/video.module#VideoModule' },
            { path: 'videoListing/:id', loadChildren: './videoListing/videoListing.module#VideoListingModule', canActivate: [AuthGuard] },
            { path: 'blogListing/:id', loadChildren: './blogListing/blogListing.module#BlogListingModule', canActivate: [AuthGuard] },
            { path: 'eventListing/:id', loadChildren: './eventListing/eventListing.module#EventListingModule', canActivate: [AuthGuard] },
            { path: 'newsListing/:id', loadChildren: './newsListing/newsListing.module#NewsListingModule', canActivate: [AuthGuard] },
            { path: 'gallery', loadChildren: './grid/grid.module#GridModule' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
