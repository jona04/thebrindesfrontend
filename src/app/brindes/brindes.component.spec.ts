import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrindesComponent } from './brindes.component';

describe('BrindesComponent', () => {
  let component: BrindesComponent;
  let fixture: ComponentFixture<BrindesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrindesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrindesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
