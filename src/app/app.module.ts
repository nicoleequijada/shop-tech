import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OptionsComponent } from './options/options.component';
import { ArticleSaleComponent } from './article-sale/article-sale.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { PromotionalItemComponent } from './promotional-item/promotional-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    OptionsComponent,
    ArticleSaleComponent,
    NewArrivalsComponent,
    PromotionalItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
