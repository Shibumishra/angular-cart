import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShoppingCartComponent } from './new-shopping-cart.component';

describe('NewShoppingCartComponent', () => {
  let component: NewShoppingCartComponent;
  let fixture: ComponentFixture<NewShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShoppingCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
