import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRadioGroupComponent } from './sample-radio-group.component';

describe('SampleRadioGroupComponent', () => {
  let component: SampleRadioGroupComponent;
  let fixture: ComponentFixture<SampleRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleRadioGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
