  import { NgFor } from '@angular/common';
  import { HttpClient, HttpClientModule } from '@angular/common/http';
  import { Component, Input } from '@angular/core';
  import { IMovie } from '../app/type';

  
  @Component({
    selector: 'app-trending',
    standalone: true,
    imports: [NgFor, HttpClientModule ],
    templateUrl: './trending.component.html',
    styleUrl: './trending.component.scss'
  })
  export class TrendingComponent {
    trendingMovies: IMovie[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
      this.http.get<IMovie[]>('./assets/data.json')
        .subscribe(data => {
          this.trendingMovies = data.filter(movie => movie.isTrending === true);
          console.log(this.trendingMovies);
        });

    }

  }
