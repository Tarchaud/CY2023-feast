import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeChatComponent } from './real-time-chat.component';

describe('RealTimeChatComponent', () => {
  let component: RealTimeChatComponent;
  let fixture: ComponentFixture<RealTimeChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealTimeChatComponent]
    });
    fixture = TestBed.createComponent(RealTimeChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
