import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeRectangleAdComponent } from './large-rectangle-ad.component';

describe('LargeRectangleAdComponent', () => {
  let component: LargeRectangleAdComponent;
  let fixture: ComponentFixture<LargeRectangleAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeRectangleAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeRectangleAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
