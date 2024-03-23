import { Component, NgModule } from '@angular/core';
// import * as data from '../assets/data.json'
import { NgFor, NgStyle } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,FormsModule , NgFor , HeaderComponent, NgStyle ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
  title = 'dev-job';
  isDayMode: boolean = true;

  jobs: any[]= [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('./assets/data.json')  // Lấy dữ liệu từ file datajson
      .subscribe(data => {
        this.jobs = data;  
      });
  }

}
