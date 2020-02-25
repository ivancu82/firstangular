import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RickMortyCharacterComponent } from './rick-morty-character.component';

describe('RickMortyCharacterComponent', () => {
  let component: RickMortyCharacterComponent;
  let fixture: ComponentFixture<RickMortyCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RickMortyCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RickMortyCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
