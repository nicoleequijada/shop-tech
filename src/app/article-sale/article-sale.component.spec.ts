import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSaleComponent } from './article-sale.component';

describe('ArticleSaleComponent', () => {
  let component: ArticleSaleComponent;
  let fixture: ComponentFixture<ArticleSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
