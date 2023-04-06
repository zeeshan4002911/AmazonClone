import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IProduct } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: IProduct[] | any = [];
  itemsSubject = new Subject();

  addToCart(item: IProduct) {
    let not_found_flag = true;
    this.items.forEach((obj: any) => {
      if (obj.id === item.id) {
        obj.qty = obj.qty + 1;
        not_found_flag = false;
      }
    });

    if (not_found_flag) {
      item.qty = 1;
      this.items.push(item);
    }

    this.itemsSubject.next(this.items);
  }

  removeFromCart(item: IProduct) {
    const index = this.items.indexOf(item);
    if (index < 0) return;

    this.items.splice(index, 1);

    this.itemsSubject.next(this.items);
    return this.items;
  }

  qtyUpdateCart(num: number, id: number) {
    this.items.forEach((item: IProduct) => {
      if (item.id == id) {
        item.qty = num;
      }
    });
    this.itemsSubject.next(this.items);
    return this.items;
  }
}
