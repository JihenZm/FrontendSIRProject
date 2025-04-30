import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParticipantDetailComponent } from './event-participant-detail.component';

describe('EventParticipantDetailComponent', () => {
  let component: EventParticipantDetailComponent;
  let fixture: ComponentFixture<EventParticipantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventParticipantDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventParticipantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
