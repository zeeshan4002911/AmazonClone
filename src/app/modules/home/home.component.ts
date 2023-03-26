import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SearchService, products, carouselData } from 'src/app/services/search.service';

interface ICarousel {
  id: number;
  src: string;
  alt: string;
}
interface IProduct {
  id: number;
  name: string;
  img: string;
  description: string;
  discount: number;
  star: number;
  ratings: number;
  answers: number;
  price: number;
  actual_price: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(config: NgbCarouselConfig, private search: SearchService) {
    config.showNavigationIndicators = false;
  }
  ngOnInit(): void {}

  products: IProduct[] = products;
  carousels: ICarousel[] = carouselData;
}
