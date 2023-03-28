import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @Input() data: any = {};

  routeToProduct() {
    this.router.navigate(['/productView', this.data.name, this.data.id]);
  }
}
