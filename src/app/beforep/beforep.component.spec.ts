import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforepComponent } from './beforep.component';

describe('BeforepComponent', () => {
  let component: BeforepComponent;
  let fixture: ComponentFixture<BeforepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
