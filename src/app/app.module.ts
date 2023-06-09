import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMiniComponent } from './components/navbar-mini/navbar-mini.component';
import { HomeComponent } from './modules/home/home.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './modules/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchService } from './services/search.service';
import { CartService } from './services/cart.service';
import { StarRatingService } from './services/star-rating.service';
import { ProductViewModule } from './modules/product-view/product-view.module';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMiniComponent,
    HomeComponent,
    HomeCardComponent,
    ProductListComponent,
    SignInComponent,
    LayoutComponent,
    ProductCardComponent,
    CartComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ProductViewModule,
    HttpClientModule
  ],
  providers: [SearchService, CartService, StarRatingService],
  bootstrap: [AppComponent],
})
export class AppModule { }
