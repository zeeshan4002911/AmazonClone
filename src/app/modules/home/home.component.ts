import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { products, carouselData } from 'src/app/services/search.service';
import { ICarousel, IProduct } from 'src/app/model/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  declare auth: any;
  loading: boolean | undefined = false;

  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.auth = window.localStorage.getItem('auth');
    this.auth = JSON.parse(this.auth);
  }

  products: IProduct[] = products;
  carousels: ICarousel[] = carouselData;

  logout() {
    window.localStorage.removeItem('auth');
    this.loading = true;
    setTimeout(() => location.reload(), 1000);
  }

  ngOnDestroy(): void {
    this.auth = this.loading = undefined;
  }
}
