import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IMovie } from '../movie.interface';

@Component({
  selector: 'app-trending',
  standalone: true,
  imports: [NgFor, HttpClientModule],
  templateUrl: './trending.component.html',
  styleUrl: './trending.component.scss',
})
export class TrendingComponent implements OnChanges {
  @Input() trendingMovies: IMovie[] = [];
  @Input() count: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('trendingMovies')) {
      this.trendingMovies = changes['trendingMovies'].currentValue.filter(
        (movie: IMovie) => movie.isTrending === true
      );
    }
  }
}
