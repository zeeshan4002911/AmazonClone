import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-navbar-mini',
  templateUrl: './navbar-mini.component.html',
  styleUrls: ['./navbar-mini.component.scss'],
})
export class NavbarMiniComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarMini') navbarMini!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.navbarMini);
  }
}
