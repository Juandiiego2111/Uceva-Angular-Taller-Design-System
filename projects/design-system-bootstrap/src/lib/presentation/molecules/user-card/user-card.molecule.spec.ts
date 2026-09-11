import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_USER_CARD_DATA } from '../../../mocks/user-card.mocks';
import { UserCardMolecule } from './user-card.molecule';

describe('UserCardMolecule', () => {
  let component: UserCardMolecule;
  let fixture: ComponentFixture<UserCardMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [UserCardMolecule] }).compileComponents();
    fixture = TestBed.createComponent(UserCardMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el AvatarAtom cuando userCardData tiene valor', () => {
    component.userCardData = MOCK_USER_CARD_DATA;
    fixture.detectChanges();
    const avatar = fixture.debugElement.query(By.css('dsb-avatar-atom'));
    expect(avatar).toBeTruthy();
  });

  it('debería mostrar el nombre del usuario', () => {
    component.userCardData = MOCK_USER_CARD_DATA;
    fixture.detectChanges();
    const nameSpan = fixture.debugElement.query(By.css('.fw-bold'));
    expect(nameSpan).toBeTruthy();
    expect(nameSpan.nativeElement.textContent).toBe(MOCK_USER_CARD_DATA.userName);
  });

  it('debería mostrar el rol del usuario', () => {
    component.userCardData = MOCK_USER_CARD_DATA;
    fixture.detectChanges();
    const roleSpan = fixture.debugElement.query(By.css('.text-muted'));
    expect(roleSpan).toBeTruthy();
    expect(roleSpan.nativeElement.textContent).toBe(MOCK_USER_CARD_DATA.userRole);
  });

  it('no debería renderizar nada cuando userCardData es null', () => {
    component.userCardData = null;
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('div'));
    expect(container).toBeFalsy();
  });
});