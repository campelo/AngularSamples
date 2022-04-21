import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleDateComponent } from './sample-date.component';

describe('SampleDateComponent', () => {
  let component: SampleDateComponent;
  let fixture: ComponentFixture<SampleDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
