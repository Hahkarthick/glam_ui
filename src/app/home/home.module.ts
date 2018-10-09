import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../layout/layout.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule, HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
