import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  declare totalItems: number;

  constructor(
    private search: SearchService,
    private router: Router,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.cart.itemsSubject.subscribe((items: any) => {
      this.totalItems = 0;
      items.forEach((item: any) => {
        this.totalItems += item.qty;
      });
    });
  }

  setSearch(input: string) {
    input = input.trim();
    if (!input) return;

    /* Passing non-empty string data to service 
     after removing whitespaces from start and end and then routing to search results page*/
    this.search.setSharedData(input);
    this.router.navigate(['/productList']);
  }
}
