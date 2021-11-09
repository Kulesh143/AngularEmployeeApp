import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypComponent } from './payp.component';

describe('PaypComponent', () => {
  let component: PaypComponent;
  let fixture: ComponentFixture<PaypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
