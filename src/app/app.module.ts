import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';


import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighlightDirective,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
