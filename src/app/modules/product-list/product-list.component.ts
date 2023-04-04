import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StarRatingService } from 'src/app/services/star-rating.service';
import { SearchService } from 'src/app/services/search.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/model/interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private searchKey: Subscription;
  products: IProduct[] = [];
  searchValue: string = '';

  constructor(
    private search: SearchService,
    private router: Router,
    public star: StarRatingService
  ) {
    this.subscription = this.search.sharedData$.subscribe(
      (data) => (this.products = data)
    );
    this.searchKey = this.search.search.subscribe(
      (data) => (this.searchValue = data)
    );

    // for redirecting to home on reload
    if (!this.searchValue) this.router.navigate(['/home']);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.searchKey.unsubscribe();
  }
}
