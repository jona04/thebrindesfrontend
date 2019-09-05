import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteClienteComponent } from './arte-cliente.component';

describe('ArteClienteComponent', () => {
  let component: ArteClienteComponent;
  let fixture: ComponentFixture<ArteClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArteClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
