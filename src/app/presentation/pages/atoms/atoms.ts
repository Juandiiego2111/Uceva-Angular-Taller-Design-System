import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AvatarAtom,
  AvatarSize,
  BadgeAtom,
  BadgeType,
  BadgeTypeText,
  ButtonAtom,
  ButtonType,
  ContainerAtom,
  IconAtom,
  TagAtom,
  TagType,
} from '@brejcha13320/design-system-bootstrap';

@Component({
  templateUrl: './atoms.html',
  imports: [
    AvatarAtom,
    BadgeAtom,
    ButtonAtom,
    IconAtom,
    ContainerAtom,
    TagAtom,
    CommonModule,
  ],
})
export class Atoms {
  badges: { type: BadgeType, typeText: BadgeTypeText}[] = [
    { type: 'primary', typeText: 'text-white' },
    { type: 'secondary', typeText: 'text-white' },
    { type: 'success', typeText: 'text-white' },
    { type: 'danger', typeText: 'text-white' },
    { type: 'warning', typeText: 'text-dark' },
    { type: 'info', typeText: 'text-dark' },
    { type: 'light', typeText: 'text-dark' },
    { type: 'dark', typeText: 'text-white' },
  ];

  buttons: { type: ButtonType, idButton: string}[] = [
    { type: 'primary', idButton: 'idButttonPrimary' },
    { type: 'secondary', idButton: 'idButttonSecondary' },
    { type: 'success', idButton: 'idButttonSuccess' },
    { type: 'danger', idButton: 'idButttonDanger' },
    { type: 'warning', idButton: 'idButttonWarning' },
    { type: 'info', idButton: 'idButttonInfo' },
    { type: 'light', idButton: 'idButttonLight' },
    { type: 'dark', idButton: 'idButttonDark' },
  ];

  icons: { name: string, size: number }[] = [
    { name: 'bootstrap', size: 1 },
    { name: 'apple', size: 2 },
    { name: 'bell', size: 3 },
    { name: 'android', size: 4 },
    { name: 'ban', size: 5 },
  ]

  onClick(idButton: string){
    alert(`Click en el Boton ${idButton}`);
  }

  tags: { text: string, type: TagType, outline: boolean }[] = [
    { text: 'Frontend', type: 'primary', outline: false },
    { text: 'Backend', type: 'success', outline: false },
    { text: 'Urgente', type: 'danger', outline: false },
    { text: 'Archivado', type: 'secondary', outline: true },
  ];

  avatars: { name: string, imageUrl: string, size: AvatarSize }[] = [
    { name: 'Juan Pérez', imageUrl: 'https://i.pravatar.cc/150?img=1', size: 'md' },
    { name: 'María García', imageUrl: '', size: 'md' },
    { name: 'Carlos López', imageUrl: 'https://i.pravatar.cc/150?img=2', size: 'lg' },
  ];

}