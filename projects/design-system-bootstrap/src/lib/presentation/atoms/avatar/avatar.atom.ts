import { Component, Input } from '@angular/core';
import { AvatarSize } from '../../../core/interfaces/core.interface';

/**
 * Componente visual tipo Avatar.
 *
 * @remarks
 * Muestra la imagen del usuario cuando está disponible o sus iniciales
 * generadas automáticamente a partir del nombre. Soporta tres tamaños.
 *
 * @example
 * ```html
 * <dsb-avatar-atom imageUrl="https://example.com/avatar.jpg" name="Juan Pérez" size="md"></dsb-avatar-atom>
 * <dsb-avatar-atom name="María García" size="lg"></dsb-avatar-atom>
 * ```
 */
@Component({
  selector: 'dsb-avatar-atom',
  template: `
    @if (imageUrl) {
      <img [src]="imageUrl" [alt]="name" class="rounded-circle" [class]="getSizeClass()">
    } @else {
      <span class="rounded-circle d-flex align-items-center justify-content-center bg-secondary text-white" [class]="getSizeClass()">
        {{ getInitials() }}
      </span>
    }
  `,
})
export class AvatarAtom {
  /**
   * URL de la imagen del usuario.
   *
   * @defaultValue ''
   */
  @Input() imageUrl: string = '';

  /**
   * Nombre completo del usuario.
   *
   * @remarks
   * Se usa para generar las iniciales cuando no hay imageUrl.
   *
   * @defaultValue ''
   */
  @Input() name: string = '';

  /**
   * Tamaño del avatar.
   *
   * @remarks
   * Define las dimensiones visuales del componente.
   *
   * @defaultValue 'md'
   */
  @Input() size: AvatarSize = 'md';

  /**
   * Obtiene las iniciales del nombre.
   *
   * @remarks
   * Extrae la primera letra del primer nombre y la primera letra del
   * último nombre, en mayúscula. Si name está vacío, devuelve '?'.
   *
   * @returns Las iniciales en mayúscula o '?' si no hay nombre.
   */
  getInitials(): string {
    if (!this.name.trim()) {
      return '?';
    }
    const parts = this.name.trim().split(/\s+/);
    const first = parts[0]?.charAt(0)?.toUpperCase() || '';
    const last = parts[parts.length - 1]?.charAt(0)?.toUpperCase() || '';
    return first + last;
  }

  /**
   * Obtiene la clase CSS según el tamaño.
   *
   * @returns La clase CSS correspondiente al tamaño seleccionado.
   */
  getSizeClass(): string {
    switch (this.size) {
      case 'sm':
        return 'avatar-sm';
      case 'md':
        return 'avatar-md';
      case 'lg':
        return 'avatar-lg';
      default:
        return 'avatar-md';
    }
  }
}