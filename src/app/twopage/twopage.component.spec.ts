import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwopageComponent } from './twopage.component';

describe('TwopageComponent', () => {
  let component: TwopageComponent;
  let fixture: ComponentFixture<TwopageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwopageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
