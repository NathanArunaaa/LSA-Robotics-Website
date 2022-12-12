import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle('LSA Robotics | Our Proejcts');
  }

}
