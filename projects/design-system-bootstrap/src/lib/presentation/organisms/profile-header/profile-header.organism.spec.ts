import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileHeaderOrganism } from './profile-header.organism';

describe('ProfileHeaderOrganism', () => {
  let component: ProfileHeaderOrganism;
  let fixture: ComponentFixture<ProfileHeaderOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHeaderOrganism]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderOrganism);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
