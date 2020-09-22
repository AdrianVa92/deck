import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacquarieTodayComponent } from './macquarie-today.component';

describe('MacquarieTodayComponent', () => {
  let component: MacquarieTodayComponent;
  let fixture: ComponentFixture<MacquarieTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacquarieTodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MacquarieTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
