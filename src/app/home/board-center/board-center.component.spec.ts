import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCenterComponent } from './board-center.component';

describe('BoardCenterComponent', () => {
  let component: BoardCenterComponent;
  let fixture: ComponentFixture<BoardCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
