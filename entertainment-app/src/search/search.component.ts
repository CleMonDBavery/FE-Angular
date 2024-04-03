import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../app/type';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  title: any;
  @Input() Movie: IMovie[] = [];
  @Output() searchMode = new EventEmitter<string>();

  constructor() {}
  onSearchInputChange() {
    this.searchMode.emit(this.title);
  }
}
