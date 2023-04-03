import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioPickerComponent } from './radio-picker.component';

describe('RadioPickerComponent', () => {
  let component: RadioPickerComponent;
  let fixture: ComponentFixture<RadioPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
