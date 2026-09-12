import { Component } from '@angular/core';
import {
  ContainerAtom,
  NavbarConfig,
  NavbarOrganism,
  ProfileHeaderConfig,
  ProfileHeaderOrganism,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.html',
  imports: [NavbarOrganism, ProfileHeaderOrganism, ContainerAtom],
})
export class Organisms {
  navbarConfig: NavbarConfig = {
    title: 'Taller Sistema de Diseño',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Átomos', url: '/atoms' },
      { text: 'Moléculas', url: '/molecules' },
      { text: 'Organismos', url: '/organisms' },
    ]
  }

  profileHeaderConfig: ProfileHeaderConfig = {
    userName: 'Juan Diego Rodríguez',
    userRole: 'Estudiante de Ingeniería',
    avatarUrl: 'https://ui-avatars.com/api/?name=Juan+Diego',
    searchPlaceholder: 'Buscar...'
  }
}
