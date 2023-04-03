import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreResturantsComponent } from './explore-resturants.component';

describe('ExploreResturantsComponent', () => {
  let component: ExploreResturantsComponent;
  let fixture: ComponentFixture<ExploreResturantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreResturantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreResturantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
