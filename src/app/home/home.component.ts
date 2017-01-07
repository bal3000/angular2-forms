import { Component, OnInit } from '@angular/core';
import { Options } from '../models/options';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages: Options[];
  model: Employee;

  constructor() {
    this.languages = [
      new Options("English", "English"),
      new Options("German", "German"),
      new Options("Spanish", "Spanish")
    ];
    this.model = new Employee("Something", "Smith", true, "w2", "English");
  }

  ngOnInit() {
  }



}
