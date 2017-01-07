import { Component, OnInit } from '@angular/core';
import { Options } from '../models/options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages: Options[];

  constructor() {
    this.languages = [];
  }

  ngOnInit() {
    this.languages = [
      new Options("English", "eng"),
      new Options("German", "ger"),
      new Options("Spanish", "esp")
    ];
  }

}
