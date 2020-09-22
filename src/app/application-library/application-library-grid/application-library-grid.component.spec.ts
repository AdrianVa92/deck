import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLibraryGridComponent } from './application-library-grid.component';

describe('ApplicationLibraryGridComponent', () => {
  let component: ApplicationLibraryGridComponent;
  let fixture: ComponentFixture<ApplicationLibraryGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationLibraryGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLibraryGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
