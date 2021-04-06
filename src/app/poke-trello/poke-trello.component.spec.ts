import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeTrelloComponent } from './poke-trello.component';

describe('PokeTrelloComponent', () => {
  let component: PokeTrelloComponent;
  let fixture: ComponentFixture<PokeTrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeTrelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
