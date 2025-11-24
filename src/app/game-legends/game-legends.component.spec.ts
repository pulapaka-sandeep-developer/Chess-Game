import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLegendsComponent } from './game-legends.component';

describe('GameLegendsComponent', () => {
  let component: GameLegendsComponent;
  let fixture: ComponentFixture<GameLegendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameLegendsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameLegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
