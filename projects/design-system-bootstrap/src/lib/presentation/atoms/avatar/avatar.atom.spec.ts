import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_AVATAR_NAME, MOCK_AVATAR_IMAGE_URL, MOCK_AVATAR_SIZE, MOCK_AVATAR_SIZE_DEFAULT } from '../../../mocks/avatar.mocks';
import { AvatarAtom } from './avatar.atom';

describe('AvatarAtom', () => {
  let component: AvatarAtom;
  let fixture: ComponentFixture<AvatarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [AvatarAtom] }).compileComponents();
    fixture = TestBed.createComponent(AvatarAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar la imagen cuando imageUrl tiene valor', () => {
    component.imageUrl = MOCK_AVATAR_IMAGE_URL;
    component.name = MOCK_AVATAR_NAME;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img).toBeTruthy();
    expect(img.nativeElement.src).toBe(MOCK_AVATAR_IMAGE_URL);
    expect(img.nativeElement.alt).toBe(MOCK_AVATAR_NAME);
  });

  it('debería mostrar las iniciales cuando imageUrl está vacío', () => {
    component.imageUrl = '';
    component.name = MOCK_AVATAR_NAME;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span).toBeTruthy();
    expect(span.nativeElement.textContent).toContain('JP');
  });

  it('debería generar las iniciales correctas a partir del nombre (getInitials)', () => {
    component.name = MOCK_AVATAR_NAME;
    expect(component.getInitials()).toBe('JP');
  });

  it('debería devolver "?" cuando name está vacío', () => {
    component.name = '';
    expect(component.getInitials()).toBe('?');
    component.name = '   ';
    expect(component.getInitials()).toBe('?');
  });

  it('debería aplicar la clase de tamaño correcta según size (getSizeClass)', () => {
    component.size = 'sm';
    expect(component.getSizeClass()).toBe('avatar-sm');
    component.size = 'md';
    expect(component.getSizeClass()).toBe('avatar-md');
    component.size = 'lg';
    expect(component.getSizeClass()).toBe('avatar-lg');
  });

  it('debería usar el tamaño por defecto si no se pasa size', () => {
    expect(component.size).toBe(MOCK_AVATAR_SIZE_DEFAULT);
    expect(component.getSizeClass()).toBe('avatar-md');
  });

  it('debería aplicar la clase de tamaño en el elemento img', () => {
    component.imageUrl = MOCK_AVATAR_IMAGE_URL;
    component.name = MOCK_AVATAR_NAME;
    component.size = MOCK_AVATAR_SIZE;
    fixture.detectChanges();
    const img = fixture.debugElement.query(By.css('img'));
    expect(img.nativeElement.className).toContain('avatar-lg');
  });

  it('debería aplicar la clase de tamaño en el elemento span cuando no hay imagen', () => {
    component.imageUrl = '';
    component.name = MOCK_AVATAR_NAME;
    component.size = 'sm';
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.className).toContain('avatar-sm');
  });
});