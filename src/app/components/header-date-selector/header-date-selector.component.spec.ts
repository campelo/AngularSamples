import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDateSelectorComponent } from './header-date-selector.component';

describe('HeaderDateSelectorComponent', () => {
  let component: HeaderDateSelectorComponent;
  let fixture: ComponentFixture<HeaderDateSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDateSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderDateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
