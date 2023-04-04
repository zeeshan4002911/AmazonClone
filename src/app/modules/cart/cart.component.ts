import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { IProduct } from 'src/app/model/interface';
import { CartService } from 'src/app/services/cart.service';

declare let $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit, DoCheck {
  constructor(private cart: CartService) {}
  totalQty: number = 0;
  totalPrice: number = 0;
  declare items: IProduct[];

  ngOnInit(): void {
    this.items = this.cart.items;
  }

  ngDoCheck(): void {
    this.totalQty = 0;
    this.totalPrice = 0;
    this.items.forEach((item: any) => {
      this.totalQty += item.qty;
      this.totalPrice += item.qty * item.price;
    });
  }

  // For changing product buy quantity
  qtyUpdate(num: number, id: number) {
    this.items = this.cart.qtyUpdateCart(num, id);
  }

  deleteItem(item: any) {
    this.items = this.cart.removeFromCart(item);
  }

  // JQuery Not working
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.dropdown-toggle').dropdown();
    });
  }
}
