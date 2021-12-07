import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionalItemComponent } from './promotional-item.component';

describe('PromotionalItemComponent', () => {
  let component: PromotionalItemComponent;
  let fixture: ComponentFixture<PromotionalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
