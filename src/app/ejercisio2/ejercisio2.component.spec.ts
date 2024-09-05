import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercisio2Component } from './ejercisio2.component';

describe('Ejercisio2Component', () => {
  let component: Ejercisio2Component;
  let fixture: ComponentFixture<Ejercisio2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Ejercisio2Component]
    });
    fixture = TestBed.createComponent(Ejercisio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
