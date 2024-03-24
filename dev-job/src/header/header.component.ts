import { Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 
  @Output() toggleMode = new EventEmitter<void>();

  constructor() {}

  onToggleMode() {
    this.toggleMode.emit();
  }
}
