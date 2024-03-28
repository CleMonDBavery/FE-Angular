import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Movie {
  title: string;
  thumbnail: {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entertainment-app';
  movies: Movie[] = [];

  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.http.get<any[]>('./assets/data.json')  // Lấy dữ liệu từ file datajson
        .subscribe(data => {
          this.movies = data; 
          // const trendingMovies = data.filter(movie => movie.isTrending === true);
          // console.log (trendingMovies) ;

        });
    }

    trending(data: Movie[]): Movie[] {
      const trendingMovies = data.filter(movie => movie.isTrending === true);
      console.log(trendingMovies);
      return trendingMovies;
    }
    
}
