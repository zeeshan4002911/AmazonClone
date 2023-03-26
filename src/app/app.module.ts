import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMiniComponent } from './components/navbar-mini/navbar-mini.component';
import { HomeComponent } from './modules/home/home.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCardComponent } from './components/home-card/home-card.component';
import { ProductViewComponent } from './modules/product-view/product-view.component';
import { ProductListComponent } from './modules/product-list/product-list.component';
import { SignInComponent } from './modules/sign-in/sign-in.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMiniComponent,
    HomeComponent,
    HomeCardComponent,
    ProductViewComponent,
    ProductListComponent,
    SignInComponent,
    LayoutComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
