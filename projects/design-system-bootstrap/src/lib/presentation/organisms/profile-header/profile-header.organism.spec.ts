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

  it('should render the user card when profile header configuration is provided', () => {
    component.profileHeaderConfig = {
      userName: 'Test User',
      userRole: 'Tester',
      avatarUrl: 'https://example.com/avatar.jpg',
      searchPlaceholder: 'Buscar...'
    };

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('dsb-user-card-molecule')).toBeTruthy();
  });

  it('should not render the user card when profile header configuration is null', () => {
    component.profileHeaderConfig = null;

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('dsb-user-card-molecule')).toBeNull();
  });

  it('should not throw when onSearch is called', () => {
    expect(() => component.onSearch('texto de prueba')).not.toThrow();
  });
});
