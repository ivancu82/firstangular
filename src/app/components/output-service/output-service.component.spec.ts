import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputServiceComponent } from './output-service.component';

describe('OutputServiceComponent', () => {
  let component: OutputServiceComponent;
  let fixture: ComponentFixture<OutputServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
