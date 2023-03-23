import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import products from '../../defaultData/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {}

  products: any = products;
  images = [
    'assets/carousel/carousel-0.jpg',
    'assets/carousel/carousel-1.jpg',
    'assets/carousel/carousel-2.jpg',
    'assets/carousel/carousel-3.jpg',
    'assets/carousel/carousel-4.jpg',
    'assets/carousel/carousel-5.jpg',
    'assets/carousel/carousel-6.jpg',
    'assets/carousel/carousel-7.jpg',
    'assets/carousel/carousel-8.jpg',
  ];
}
