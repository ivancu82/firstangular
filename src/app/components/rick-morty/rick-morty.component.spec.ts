import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyComponent } from './rick-morty.component';

fdescribe('RickMortyComponent', () => {
  let component: RickMortyComponent;
  let fixture: ComponentFixture<RickMortyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickMortyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
