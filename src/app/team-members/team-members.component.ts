import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent implements OnInit {

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {

    this.title.setTitle('LSA Robotics | Team Members');

    this.seo.generateTags({
      title: 'LSA Robotics | Team Members',
      description: 'Laval Senior Academy Robotics Team Members',
      image: 'http://www.swlauriersb.qc.ca/schools/llhs/_pages/content/LSHS_LLHS/LSHS_LLHS%2030.jpg',
      slug: 'team-members'
    })

}
}
