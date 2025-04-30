import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveticketParticipantComponent } from './reserveticket-participant.component';

describe('ReserveticketParticipantComponent', () => {
  let component: ReserveticketParticipantComponent;
  let fixture: ComponentFixture<ReserveticketParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReserveticketParticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReserveticketParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
