import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private search: SearchService, private router: Router) {}

  ngOnInit(): void {}

  setSearch(input: string) {
    this.search.setSharedData(input);
  }

  onEnterClick(input: string) {
    this.setSearch(input);
    this.router.navigate(['/productList'])
  }
}
