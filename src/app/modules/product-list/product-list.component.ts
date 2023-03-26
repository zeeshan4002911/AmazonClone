import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  private subscription: Subscription;
  private searchKey: Subscription;
  products: any = [];
  searchValue: string = '';

  constructor(private search: SearchService) {
    this.subscription = this.search.sharedData$.subscribe(
      (data) => (this.products = data)
    );
    this.searchKey = this.search.search.subscribe(
      (data) => (this.searchValue = data)
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.searchKey.unsubscribe();
  }
}
