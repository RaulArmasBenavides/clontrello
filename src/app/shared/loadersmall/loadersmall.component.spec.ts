import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadersmallComponent } from './loadersmall.component';

describe('LoadersmallComponent', () => {
  let component: LoadersmallComponent;
  let fixture: ComponentFixture<LoadersmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadersmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadersmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
