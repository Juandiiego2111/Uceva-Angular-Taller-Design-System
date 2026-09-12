import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_SEARCH_PLACEHOLDER, MOCK_SEARCH_VALUE } from '../../../mocks/search-input.mocks';
import { SearchInputMolecule } from './search-input.molecule';

describe('SearchInputMolecule', () => {
  let component: SearchInputMolecule;
  let fixture: ComponentFixture<SearchInputMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [SearchInputMolecule] }).compileComponents();
    fixture = TestBed.createComponent(SearchInputMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar el ícono de búsqueda', () => {
    const icon = fixture.debugElement.query(By.css('dsb-icon-atom'));
    expect(icon).toBeTruthy();
  });

  it('debería mostrar el placeholder recibido', () => {
    component.placeholder = MOCK_SEARCH_PLACEHOLDER;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.placeholder).toBe(MOCK_SEARCH_PLACEHOLDER);
  });

  it('debería reflejar el value recibido en el input', () => {
    component.value = MOCK_SEARCH_VALUE;
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    expect(input.nativeElement.value).toBe(MOCK_SEARCH_VALUE);
  });

  it('debería emitir search al escribir', () => {
    const spy = jest.spyOn(component.search, 'emit');
    fixture.detectChanges();
    const input = fixture.debugElement.query(By.css('input'));
    input.nativeElement.value = MOCK_SEARCH_VALUE;
    input.nativeElement.dispatchEvent(new Event('input'));
    expect(spy).toHaveBeenCalledWith(MOCK_SEARCH_VALUE);
  });
});
