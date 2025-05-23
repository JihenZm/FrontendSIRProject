import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListParticipantComponent } from './list-participant.component';

describe('ListParticipantComponent', () => {
  let component: ListParticipantComponent;
  let fixture: ComponentFixture<ListParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListParticipantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
