import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSummaryListComponent } from './staff-summary-list.component';

describe('StaffSummaryListComponent', () => {
  let component: StaffSummaryListComponent;
  let fixture: ComponentFixture<StaffSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
