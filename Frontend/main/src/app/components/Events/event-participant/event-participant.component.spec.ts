import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantComponent } from './event-participant.component';

describe('EventParticipantComponent', () => {
  let component: EventParticipantComponent;
  let fixture: ComponentFixture<EventParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventParticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
