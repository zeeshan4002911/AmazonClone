import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingService } from 'src/app/services/star-rating.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router, public star: StarRatingService) {}

  ngOnInit(): void {}

  @Input() data: any = {};

  routeToProduct() {
    this.router.navigate(['/productView', this.data.name, this.data.id]);
  }
}
