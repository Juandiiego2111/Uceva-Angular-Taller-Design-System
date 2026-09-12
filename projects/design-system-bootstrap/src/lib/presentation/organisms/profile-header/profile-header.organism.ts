import { Component, Input } from '@angular/core';
import { ProfileHeaderConfig } from '../../../core/interfaces/core.interface';
import { SearchInputMolecule } from '../../molecules/search-input/search-input.molecule';
import { UserCardMolecule } from '../../molecules/user-card/user-card.molecule';

/**
 * Profile Header del Design System.
 *
 * @description
 * Componente tipo **Organismo** según Atomic Design.
 * Orquesta átomos y moléculas para construir
 * un header de perfil de usuario completo.
 */
@Component({
  imports: [UserCardMolecule, SearchInputMolecule],
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

  /**
   * Acción de búsqueda del Profile Header.
   *
   * @description
   * Simula la acción de búsqueda del organismo registrando en consola
   * el texto ingresado por el usuario.
   *
   * @param query
   * Texto ingresado por el usuario en el campo de búsqueda.
   */
  onSearch(query: string): void {
    console.log('Búsqueda:', query);
  }
}
