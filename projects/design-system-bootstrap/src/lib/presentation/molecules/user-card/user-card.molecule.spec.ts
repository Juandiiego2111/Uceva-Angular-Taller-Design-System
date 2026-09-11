import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardMolecule } from './user-card.molecule';

describe('UserCardMolecule', () => {
  let component: UserCardMolecule;
  let fixture: ComponentFixture<UserCardMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardMolecule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
