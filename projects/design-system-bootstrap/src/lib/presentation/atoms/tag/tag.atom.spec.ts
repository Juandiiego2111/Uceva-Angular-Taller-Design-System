import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TAG_TEXT, MOCK_TAG_TYPE, MOCK_TAG_TYPE_DEFAULT, MOCK_TAG_TYPES } from '../../../mocks/tag.mocks';
import { TagAtom } from './tag.atom';

describe('TagAtom', () => {
  let component: TagAtom;
  let fixture: ComponentFixture<TagAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TagAtom] }).compileComponents();
    fixture = TestBed.createComponent(TagAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el texto del tag', () => {
    component.text = MOCK_TAG_TEXT;
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe(MOCK_TAG_TEXT);
  });

  it('debería usar los valores por defecto si no se pasan inputs', () => {
    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.className).toContain(`bg-${MOCK_TAG_TYPE_DEFAULT}`);
  });

  it('debería aplicar estilo sólido cuando outline es false', () => {
    component.type = MOCK_TAG_TYPE;
    component.outline = false;
    expect(component.getClass()).toBe(`bg-${MOCK_TAG_TYPE} text-white`);
  });

  it('debería aplicar estilo outline cuando outline es true', () => {
    component.type = MOCK_TAG_TYPE;
    component.outline = true;
    expect(component.getClass()).toBe(`border border-${MOCK_TAG_TYPE} text-${MOCK_TAG_TYPE} bg-white`);
  });

  it('debería generar clases correctas para múltiples tipos', () => {
    MOCK_TAG_TYPES.forEach(type => {
      component.type = type;
      component.outline = false;
      expect(component.getClass()).toBe(`bg-${type} text-white`);
    });
  });
});
