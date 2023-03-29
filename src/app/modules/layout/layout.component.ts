import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavbarMiniComponent } from 'src/app/components/navbar-mini/navbar-mini.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(NavbarMiniComponent) top!: NavbarMiniComponent;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.top);
  }

  onBackToTop() {
    if (this.top && this.top.navbarMini) {
      this.top.navbarMini.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
