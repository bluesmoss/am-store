import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { DemoComponent } from './demo/demo.component';
import { LayoutComponent } from './layout/layout.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';



import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    SharedModule,
    CoreModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
