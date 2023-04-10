import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  // Footer Static Data
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
  get_to_know_us = ['About US', 'Careers', 'Press Release', 'Amazon Science'];
  connect_with_us = ['Facebook', 'twitter', 'instgram']
  make_money_with_us = ['Sell on Amazon', 'Sell under Amazon Accelerator', 'Protect and Build Your Brand', 'Amazon Global Selling', 'Become an Affiliate', 'Fulfilment by Amazon', 'Advertise Your Products', 'Amazon Pay on Merchants']
  let_us_help_you = ['COVID-19 and Amazon', 'Your Account', 'Returns Centre', '100% Purchase Protection', 'Amazon App Download', 'Help']

  constructor() {}
  @Output() backToTop = new EventEmitter();

  ngOnInit(): void {}

  onBackToTop() {
    this.backToTop.emit();
  }
}
