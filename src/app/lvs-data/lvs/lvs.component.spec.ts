import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LvsComponent } from './lvs.component';

describe('LvsComponent', () => {
  let component: LvsComponent;
  let fixture: ComponentFixture<LvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
