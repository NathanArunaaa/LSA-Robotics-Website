import { SeoService } from './../seo.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {

    this.title.setTitle('LSA Robotics | Home');

    this.seo.generateTags({
      title: 'LSA Robotics | Home',
      description: 'Laval Senior Academy Robotics Team',
      image: 'http://www.swlauriersb.qc.ca/schools/llhs/_pages/content/LSHS_LLHS/LSHS_LLHS%2030.jpg',
      slug: 'home'
    })

}
}
