import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationLibraryListComponent } from './application-library-list.component';

describe('ApplicationLibraryListComponent', () => {
  let component: ApplicationLibraryListComponent;
  let fixture: ComponentFixture<ApplicationLibraryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationLibraryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationLibraryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
