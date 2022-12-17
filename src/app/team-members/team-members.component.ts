import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Laval Senior Academy Robotics Team Members' },
      { name: 'author', content: 'LSA Robotics' },
      { name: 'keywords', content: 'LSA Robotics, Laval Senior Academy, Robotics, LSA Robotics Team' }
    ])
  }

  ngOnInit(): void {
    this.title.setTitle('LSA Robotics | Team Members');
  }

}
