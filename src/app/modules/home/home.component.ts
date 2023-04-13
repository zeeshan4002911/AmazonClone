import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { carouselData, SearchService } from 'src/app/services/search.service';
import { ICarousel, IProduct } from 'src/app/model/interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  declare auth: any;
  loading: boolean | undefined = false;
  products: IProduct[] = [];
  carousels: ICarousel[] = carouselData;

  constructor(config: NgbCarouselConfig, private titleService: Title, private fetchService: SearchService) {
    config.showNavigationIndicators = false;
    this.titleService.setTitle('AmazonClone Home');
  }

  ngOnInit(): void {
    this.auth = window.localStorage.getItem('auth');
    this.auth = JSON.parse(this.auth);
    this.products = this.fetchService.products;

    this.fetchService.fetchedData().subscribe((response: any) => {
      if (response?.status == 'Success') {
        this.fetchService.setFetchedData(response?.data);
        this.products = response?.data;
        console.log("API Fetched Success", response);
      } else {
        console.log("API Fetch Failed", response);
      }
    })
  }

  logout() {
    window.localStorage.removeItem('auth');
    this.loading = true;
    setTimeout(() => location.reload(), 1000);
  }

  ngOnDestroy(): void {
    this.auth = this.loading = undefined;
  }
}
