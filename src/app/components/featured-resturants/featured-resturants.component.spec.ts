import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedResturantsComponent } from './featured-resturants.component';

describe('FeaturedResturantsComponent', () => {
  let component: FeaturedResturantsComponent;
  let fixture: ComponentFixture<FeaturedResturantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedResturantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
