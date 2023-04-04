import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/model/interface';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss'],
})
export class HomeCardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  @Input() data: IProduct = <IProduct>{};

  routeToProduct() {
    this.router.navigate(['/productView', this.data.name, this.data.id]);
  }
}
