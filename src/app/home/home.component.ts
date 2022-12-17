import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Laval Senior Academy Robotics Home Page' },
      { name: 'author', content: 'LSA Robotics' },
      { name: 'keywords', content: 'LSA Robotics, Laval Senior Academy, Robotics, Home Page' }
    ])
  }

  ngOnInit(): void {

    this.title.setTitle('LSA Robotics | Home Page');
  }

}
