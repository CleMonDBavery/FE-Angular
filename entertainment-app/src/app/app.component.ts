import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//componnets
import { AsideComponent } from "../aside/aside.component";
import { SearchComponent } from "../search/search.component";
import { RecommentComponent } from "../recomment/recomment.component";
import { TrendingComponent } from "../trending/trending.component";
import { IMovie } from './type';
// ///componnets

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HttpClientModule, AsideComponent, SearchComponent, RecommentComponent, TrendingComponent, NgFor, FormsModule]
})
export class AppComponent {
  title = 'entertainment-app';
  Movie: IMovie[] = [];
  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.http.get<any[]>('./assets/data.json')  // Lấy dữ liệu từ file datajson
        .subscribe(data => {
          this.Movie = data; 
          console.log(this.Movie);
        });
    }
  
    searchMode(data: string){
      if(data == ""){
        console.log("rỗng")
        this.ngOnInit();
      }else {
  
        this.Movie = this.Movie.filter( res => {
          return res.title.toLocaleLowerCase().match(data.toLocaleLowerCase());
        },
        console.log("có", this.Movie)
         )
      }
    }

    
}
