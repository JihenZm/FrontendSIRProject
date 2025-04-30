import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListticketParticipantComponent } from './listticket-participant.component';

describe('ListticketParticipantComponent', () => {
  let component: ListticketParticipantComponent;
  let fixture: ComponentFixture<ListticketParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListticketParticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListticketParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
