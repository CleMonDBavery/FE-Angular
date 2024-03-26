import { Component, OnInit } from '@angular/core';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';
import { ButtonComponent } from '../button/button.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,FormsModule , NgClass , NgFor , CardComponent , HeaderComponent, NgStyle, ButtonComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  implements OnInit {
  title = 'dev-job';

  jobs: any[]= [];
  isNightMode: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('./assets/data.json')  // Lấy dữ liệu từ file datajson
      .subscribe(data => {
        this.jobs = data;  
      });
  }

  mode(isNightMode: any){
    this.isNightMode = isNightMode;
  }



}
