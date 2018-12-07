import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesincidentComponent } from './mesincident.component';

describe('MesincidentComponent', () => {
  let component: MesincidentComponent;
  let fixture: ComponentFixture<MesincidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesincidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
