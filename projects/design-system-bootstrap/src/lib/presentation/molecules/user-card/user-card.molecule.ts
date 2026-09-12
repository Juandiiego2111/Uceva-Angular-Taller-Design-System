import { Component, Input } from '@angular/core';
import { AvatarAtom } from '../../atoms/avatar/avatar.atom';
import { UserCardData } from '../../../core/interfaces/core.interface';

/**
 * Tarjeta de usuario combinando avatar y datos.
 *
 * @description
 * Componente tipo **Molécula** según Atomic Design.
 * Combina el átomo `AvatarAtom` con el nombre y rol del usuario
 * para formar una tarjeta de perfil reutilizable.
 *
 * @remarks
 * Recibe un objeto `UserCardData` que contiene la información del
 * usuario y renderiza el avatar junto a sus datos básicos.
 *
 * @example
 * ```html
 * <dsb-user-card-molecule [userCardData]="{
 *   userName: 'Juan Pérez',
 *   userRole: 'Administrador',
 *   avatarUrl: 'https://example.com/avatar.jpg'
 * }"></dsb-user-card-molecule>
 * ```
 */
@Component({
  selector: 'dsb-user-card-molecule',
  templateUrl: './user-card.molecule.html',
  imports: [AvatarAtom],
})
export class UserCardMolecule {
  /**
   * Datos del usuario a mostrar en la tarjeta.
   *
   * @remarks
   * Debe contener `userName`, `userRole` y `avatarUrl`.
   * Si es `null`, no se renderiza nada.
   *
   * @defaultValue null
   */
  @Input() userCardData: UserCardData | null = null;
}