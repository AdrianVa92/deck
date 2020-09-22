import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffOverviewComponent } from './staff-overview.component';

describe('StaffOverviewComponent', () => {
  let component: StaffOverviewComponent;
  let fixture: ComponentFixture<StaffOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
