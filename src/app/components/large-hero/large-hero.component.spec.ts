import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeHeroComponent } from './large-hero.component';

describe('LargeHeroComponent', () => {
  let component: LargeHeroComponent;
  let fixture: ComponentFixture<LargeHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
