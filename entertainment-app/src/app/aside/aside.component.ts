import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface IIcon {
  url: string;
  description: string;
}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [NgFor],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  logoUrl: string = '../assets/logo.svg';
  iconList: IIcon[] = [
    { url: '../assets/icon-nav-home.svg', description: 'This is a home icon' },
    {
      url: '../assets/icon-nav-movies.svg',
      description: 'This is a movies icon',
    },
    {
      url: '../assets/icon-nav-tv-series.svg',
      description: 'This is a series icon',
    },
    {
      url: '../assets/icon-nav-bookmark.svg',
      description: 'This is a bookmark icon',
    },
  ];
}
