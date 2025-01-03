import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackKillsComponent } from './black-kills.component';

describe('BlackKillsComponent', () => {
  let component: BlackKillsComponent;
  let fixture: ComponentFixture<BlackKillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlackKillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlackKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
