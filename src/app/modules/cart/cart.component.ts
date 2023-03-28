import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

declare let $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, AfterViewInit {
  constructor(private cart: CartService) {}
  items: any = [];
  qty: number = 1;
  totalQty: number = 0;
  totalPrice: number = 0;

  ngOnInit(): void {
    this.items = this.cart.items;
    this.totalQty = this.items.length;
    for (let item of this.items) {
      this.totalPrice += item.price;
    }
  }

  // For changing product buy quantity
  qtyUpdate(num: number) {
    this.qty = num;
  }

  deleteItem(item: any) {
    this.items = this.cart.removeFromCart(item);
    this.totalQty--;
    this.totalPrice -= item.price;
  }

  // JQuery Not working
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.dropdown-toggle').dropdown();
    });
  }
}
