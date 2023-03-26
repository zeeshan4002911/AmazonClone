import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import products from '../defaultData/productData';
import carouselData from '../defaultData/carouselData';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();
  private searchSubject = new BehaviorSubject<any>(null);
  search = this.searchSubject.asObservable();

  constructor() {}

  filterProducts(key: string) {
    const keyRegex = new RegExp(key, 'i');
    const result = products.filter((product) =>
      product.description.match(keyRegex)
    );
    return result;
  }

  setSharedData(input: string): void {
    const filteredProduct = this.filterProducts(input);
    console.log('Result', filteredProduct);
    this.sharedDataSubject.next(filteredProduct);
    this.searchSubject.next(input);
  }
}

export { products, carouselData };