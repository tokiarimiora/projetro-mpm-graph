import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public model: go.TreeModel = new go.TreeModel([
    {
      key: 0,
      name: 'George V',
      gender: 'M',
      birthYear: '1865',
      deathYear: '1936',
      reign: '1910-1936',
    },
    {
      key: 1,
      parent: 0,
      name: 'Edward VIII',
      gender: 'M',
      birthYear: '1894',
      deathYear: '1972',
      reign: '1936',
    },
    {
      key: 2,
      parent: 0,
      name: 'George VI',
      gender: 'M',
      birthYear: '1895',
      deathYear: '1952',
      reign: '1936-1952',
    },
    {
      key: 7,
      parent: 2,
      name: 'Elizabeth II',
      gender: 'F',
      birthYear: '1926',
      reign: '1952-',
    },
    {
      key: 16,
      parent: 7,
      name: 'Charles, Prince of Wales',
      gender: 'M',
      birthYear: '1948',
    },
  ]);

  ngOnInit() {}
}
