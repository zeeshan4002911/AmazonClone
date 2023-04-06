import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  countries = [
    'Australia',
    'Brazil',
    'Canada',
    'China',
    'France',
    'Germany',
    'Italy',
    'India',
    'Japan',
    'Mexico',
    'Netherlands',
    'Poland',
    'Singapore',
    'Spain',
    'Turkey',
    'United arab emirates',
    'United Kingdom',
    'United State',
  ];
  constructor() {}
  @Output() backToTop = new EventEmitter();

  ngOnInit(): void {}

  onBackToTop() {
    this.backToTop.emit();
  }
}
