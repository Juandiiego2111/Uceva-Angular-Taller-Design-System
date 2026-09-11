import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarAtom } from './avatar.atom';

describe('AvatarAtom', () => {
  let component: AvatarAtom;
  let fixture: ComponentFixture<AvatarAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarAtom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
