import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/model/interface';
import { CartService } from 'src/app/services/cart.service';
import { products } from 'src/app/services/search.service';
import { StarRatingService } from 'src/app/services/star-rating.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  declare name: string;
  declare id: number;
  declare product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private cart: CartService,
    public star: StarRatingService
  ) {}

  ngOnInit(): void {
    // Getting product name and id from url parameters
    this.route.params.subscribe((params) => {
      this.name = params.name;
      this.id = params.id;
      this.product = products.filter(
        (obj) => obj.id === Number(this.id) && obj.name === this.name
      )[0];
    });
  }

  addToCart(product: IProduct) {
    this.cart.addToCart(product);
  }
}
