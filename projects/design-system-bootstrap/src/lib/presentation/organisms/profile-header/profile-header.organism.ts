import { Component, Input } from '@angular/core';
import { ProfileHeaderConfig } from '../../../core/interfaces/core.interface';

/**
 * Profile Header del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta átomos y moléculas para construir
 * un header de perfil de usuario completo.
 *
 * Integra:
 * - `UserCardMolecule` (pendiente de importación)
 * - `SearchInputMolecule` (pendiente de importación)
 */
@Component({
  imports: [],
  selector: 'dsb-profile-header-organism',
  styleUrl: './profile-header.organism.css',
  templateUrl: './profile-header.organism.html',
})
export class ProfileHeaderOrganism {

  /**
   * Configuración del Profile Header.
   *
   * @description
   * Define el nombre, rol, avatar y placeholder
   * de búsqueda que componen el header.
   *
   * Cuando el valor es `null`, el componente
   * no renderiza contenido.
   *
   * @type {ProfileHeaderConfig | null}
   * @default null
   */
  @Input() profileHeaderConfig: ProfileHeaderConfig | null = null;
}