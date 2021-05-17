import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGlideModule } from 'ngx-glide';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home/home.component';


@NgModule( {
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxGlideModule
  ]
} )
export class HomeModule { }
