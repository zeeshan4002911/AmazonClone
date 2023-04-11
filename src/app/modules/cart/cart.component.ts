import {
  Component,
  OnInit,
  AfterViewInit,
  DoCheck,
  OnDestroy,
} from '@angular/core';
import { IProduct } from 'src/app/model/interface';
import { CartService } from 'src/app/services/cart.service';

declare let $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent
  implements OnInit, AfterViewInit, DoCheck, OnDestroy
{
  constructor(private cart: CartService) {}
  totalQty: number | undefined = 0;
  totalPrice: number | undefined = 0;
  declare items: IProduct[] | undefined;

  ngOnInit(): void {
    this.items = this.cart.items;
  }

  ngDoCheck(): void {
    this.totalQty = 0;
    this.totalPrice = 0;
    this.items?.forEach((item: any) => {
      this.totalQty += item.qty;
      this.totalPrice = <number>this.totalPrice + item.qty * item.price;
    });
  }

  // For changing product buy quantity
  qtyUpdate(num: number, id: number) {
    this.items = this.cart.qtyUpdateCart(num, id);
  }

  deleteItem(item: any) {
    this.items = this.cart.removeFromCart(item);
  }

  // JQuery Not working cause of version incompatibility
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.dropdown-toggle').dropdown();
    });
  }

  ngOnDestroy(): void {
    this.totalQty = undefined;
    this.totalPrice = undefined;
    this.items = undefined;
  }
}
