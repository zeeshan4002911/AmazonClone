import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarMiniComponent } from './components/navbar-mini/navbar-mini.component';
import { HomeComponent } from './modules/home/home.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeCardComponent } from './components/home-card/home-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarMiniComponent,
    HomeComponent,
    HomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
