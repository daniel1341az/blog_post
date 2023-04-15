import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardAdComponent } from './leaderboard-ad.component';

describe('LeaderboardAdComponent', () => {
  let component: LeaderboardAdComponent;
  let fixture: ComponentFixture<LeaderboardAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaderboardAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
