import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  
  items: object[] = [];
  itemsSubject = new Subject();

  addToCart(item: object) {
    this.items.push(item);
    this.itemsSubject.next(this.items);
  }

  removeFromCart(item: object) {
    const index = this.items.indexOf(item);
    if (index < 0) return;
    this.items.splice(index, 1);
    return this.items
  }
}
