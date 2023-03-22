import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMiniComponent } from './navbar-mini.component';

describe('NavbarMiniComponent', () => {
  let component: NavbarMiniComponent;
  let fixture: ComponentFixture<NavbarMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMiniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
