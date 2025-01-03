import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteKillsComponent } from './white-kills.component';

describe('WhiteKillsComponent', () => {
  let component: WhiteKillsComponent;
  let fixture: ComponentFixture<WhiteKillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhiteKillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WhiteKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
