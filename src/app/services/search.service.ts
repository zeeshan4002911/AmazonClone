import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import defaultProducts from '../defaultData/productData';
import carouselData from '../defaultData/carouselData';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment.prod';
import { IProduct } from '../model/interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  products: IProduct[] = defaultProducts;
  private sharedDataSubject = new BehaviorSubject<any>([]);
  sharedData$ = this.sharedDataSubject.asObservable();
  private searchSubject = new BehaviorSubject<any>(null);
  search$ = this.searchSubject.asObservable();

  constructor(private http: HttpClient) { }

  filterProducts(key: string) {
    const keyRegex = new RegExp(key, 'i');
    const result = this.products.filter((product) =>
      product.description.match(keyRegex)
    );
    return result;
  }

  setSharedData(input: string): void {
    const filteredProduct = this.filterProducts(input);
    this.sharedDataSubject.next(filteredProduct);
    this.searchSubject.next(input);
  }

  fetchedData() {
    return this.http.get(environment.PRODUCTS_API_KEY);
  }

  setFetchedData(data: IProduct[]) {
    this.products = data;
    this.sharedDataSubject.next(data);
  }
}

export { carouselData };