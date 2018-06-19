import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhwComponent } from './phw.component';

describe('PhwComponent', () => {
  let component: PhwComponent;
  let fixture: ComponentFixture<PhwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
