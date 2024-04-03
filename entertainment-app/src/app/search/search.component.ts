import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMovie } from '../movie.interface';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  title: string = '';
  @Input() movie: IMovie[] = [];
  @Output() searchMode = new EventEmitter<string>();

  constructor() {}
  onSearchInputChange() {
    this.searchMode.emit(this.title);
  }
}
