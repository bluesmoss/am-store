import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './components/banner/banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';



@NgModule ({
    declarations: [
        HomeComponent,
        BannerComponent,
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})

export class HomeModule {

}