import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSummaryGridComponent } from './staff-summary-grid.component';

describe('StaffSummaryGridComponent', () => {
  let component: StaffSummaryGridComponent;
  let fixture: ComponentFixture<StaffSummaryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSummaryGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSummaryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
