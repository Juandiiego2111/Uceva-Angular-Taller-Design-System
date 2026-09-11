import { Component, Input } from '@angular/core';
import { TagType } from '../../../core/interfaces/core.interface';

/**
 * Componente visual tipo Tag (etiqueta de categoría).
 *
 * @remarks
 * Se utiliza para clasificar contenido por categoría (ej. "Frontend",
 * "Urgente"), a diferencia de `BadgeAtom`, que comunica un estado.
 * Se muestra en forma de píldora y admite una variante `outline`
 * para categorías secundarias.
 *
 * @example
 * ```html
 * <dsb-tag-atom text="Frontend" type="info"></dsb-tag-atom>
 * <dsb-tag-atom text="Archivado" type="secondary" [outline]="true"></dsb-tag-atom>
 * ```
 */
@Component({
  selector: 'dsb-tag-atom',
  template: `<span class="badge rounded-pill" [class]="getClass()">{{ text }}</span>`,
})
export class TagAtom {
  /**
   * Texto que identifica la categoría.
   *
   * @defaultValue ''
   */
  @Input() text: string = '';

  /**
   * Color temático del tag.
   *
   * @remarks
   * Corresponde a los colores definidos por Bootstrap.
   *
   * @defaultValue 'secondary'
   */
  @Input() type: TagType = 'secondary';

  /**
   * Variante visual del tag.
   *
   * @remarks
   * Cuando es `true`, se muestra con borde y fondo transparente
   * en vez de fondo sólido — útil para categorías secundarias.
   *
   * @defaultValue false
   */
  @Input() outline: boolean = false;

  /**
   * Construye las clases CSS del tag según el tipo y la variante.
   *
   * @returns Cadena con las clases CSS aplicadas al tag.
   */
  getClass(): string {
    return this.outline
      ? `border border-${this.type} text-${this.type} bg-white`
      : `bg-${this.type} text-white`;
  }
}
