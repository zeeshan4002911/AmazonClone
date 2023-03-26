import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from 'src/app/services/search.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  declare name: string;
  declare id: number;
  declare product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.name = params.name;
      this.id = params.id;
      this.product = products.filter(
        (obj) => obj.id === Number(this.id) && obj.name === this.name
      )[0];
      console.log("Clicked product", this.product);
    });
  }
}
