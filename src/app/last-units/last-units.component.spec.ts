import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastUnitsComponent } from './last-units.component';

describe('LastUnitsComponent', () => {
  let component: LastUnitsComponent;
  let fixture: ComponentFixture<LastUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastUnitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
