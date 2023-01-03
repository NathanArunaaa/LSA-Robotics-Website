import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-software-list',
  templateUrl: './software-list.component.html',
  styleUrls: ['./software-list.component.css']
})
export class SoftwareListComponent implements OnInit {

  constructor(private seo: SeoService, private title: Title) {

  }

  ngOnInit(): void {
    
    this.title.setTitle('LSA Robotics | Software List');

    this.seo.generateTags({
      title: 'LSA Robotics | Software List',
      description: 'Laval Senior Academy Robotics Team Software List',
      image: 'http://www.swlauriersb.qc.ca/schools/llhs/_pages/content/LSHS_LLHS/LSHS_LLHS%2030.jpg',
      slug: 'software-list'
    })
}
}
