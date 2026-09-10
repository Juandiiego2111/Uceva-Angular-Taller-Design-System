import { Component, Input } from '@angular/core';
import { ProfileHeaderConfig } from '../../../core/interfaces/core.interface';

@Component({
  imports: [],
  selector: 'dsb-profile-header-organism',
  styleUrl: './profile-header.organism.css',
  templateUrl: './profile-header.organism.html',
})
export class ProfileHeaderOrganism {
  @Input() profileHeaderConfig: ProfileHeaderConfig | null = null;
}