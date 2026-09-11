import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconAtom } from '../../atoms/icon/icon.atom';

/**
 * Campo de búsqueda con ícono.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina el átomo `IconAtom` con un campo de texto nativo
 * para formar un control de búsqueda reutilizable.
 *
 * @remarks
 * No mantiene el texto como única fuente de verdad: refleja el
 * `value` recibido por `@Input()` y emite cada cambio mediante
 * `search`, dejando el estado real en manos del componente padre.
 *
 * @example
 * ```html
 * <dsb-search-input-molecule
 *   placeholder="Buscar productos..."
 *   [value]="query"
 *   (search)="onSearch($event)">
 * </dsb-search-input-molecule>
 * ```
 */
@Component({
  selector: 'dsb-search-input-molecule',
  templateUrl: './search-input.molecule.html',
  imports: [IconAtom],
})
export class SearchInputMolecule {
  /**
   * Texto de ayuda mostrado cuando el campo está vacío.
   *
   * @defaultValue 'Buscar...'
   */
  @Input() placeholder: string = 'Buscar...';

  /**
   * Valor actual del campo de búsqueda.
   *
   * @defaultValue ''
   */
  @Input() value: string = '';

  /**
   * Evento emitido cada vez que el usuario escribe en el campo.
   *
   * @emits string Texto actual del campo de búsqueda.
   */
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Actualiza el valor local y emite el evento `search`.
   *
   * @param value Texto ingresado por el usuario.
   */
  onInputChange(value: string): void {
    this.value = value;
    this.search.emit(value);
  }
}
