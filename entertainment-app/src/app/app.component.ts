import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** Components */
import { AsideComponent } from './aside/aside.component';
import { SearchComponent } from './search/search.component';
import { RecommentComponent } from './recomment/recomment.component';
import { TrendingComponent } from './trending/trending.component';

/** Interfaces */
import { IMovie } from './movie.interface';

const MOCK_URL = './assets/data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HttpClientModule,
    AsideComponent,
    SearchComponent,
    RecommentComponent,
    TrendingComponent,
    NgFor,
    FormsModule,
  ],
})
export class AppComponent {
  title = 'entertainment-app';
  movie: IMovie[] = [];
  keyWord: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMovieList();
  }

  getMovieList() {
    this.http
      .get<IMovie[]>(MOCK_URL) // Lấy dữ liệu từ file datajson
      .subscribe((data: IMovie[]) => {
        this.movie = data;
      });
  }

  getTrendingMovie(movie: IMovie[]) {
    return movie.filter((movie: IMovie) => movie.isTrending === true);
  }

  getMovieHasFilter(movie: IMovie[], keyword: string) {
    return movie.filter((res: IMovie) => {
      return res.title
        .toLocaleLowerCase()
        .trimEnd()
        .trimStart()
        .match(keyword.toLocaleLowerCase().trimEnd().trimStart());
    });
  }

  searchMode(keyword: string) {
    this.keyWord = keyword;
  }
}
