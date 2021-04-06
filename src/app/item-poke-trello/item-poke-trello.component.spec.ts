import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPokeTrelloComponent } from './item-poke-trello.component';

describe('ItemPokeTrelloComponent', () => {
  let component: ItemPokeTrelloComponent;
  let fixture: ComponentFixture<ItemPokeTrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPokeTrelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPokeTrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
