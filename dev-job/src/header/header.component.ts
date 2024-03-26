import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggle = new EventEmitter <boolean> ();

  isNightMode: boolean = false;

  toggleMode() {
    this.toggle.emit(this.isNightMode);
  }



}
