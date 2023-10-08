import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loader3Component } from './loader3.component';

describe('Loader3Component', () => {
  let component: Loader3Component;
  let fixture: ComponentFixture<Loader3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Loader3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loader3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
