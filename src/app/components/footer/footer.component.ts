import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor() {}
  @Output() backToTop = new EventEmitter()

  ngOnInit(): void {}

  onBackToTop() {
    this.backToTop.emit();
  }
}
