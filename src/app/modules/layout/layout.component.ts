import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavbarMiniComponent } from 'src/app/components/navbar-mini/navbar-mini.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit, DoCheck {
  @ViewChild(NavbarMiniComponent) top!: NavbarMiniComponent;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
  }

  ngDoCheck(): void {
    window.onload = () => this.onBackToTop();
  }

  ngAfterViewInit(): void {
    console.log(this.top);
  }

  onBackToTop() {
    if (this.top && this.top.navbarMini) {
      this.top.navbarMini.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
