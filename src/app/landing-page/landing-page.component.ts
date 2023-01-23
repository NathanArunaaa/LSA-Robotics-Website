import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { SeoService } from '../seo.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private seo: SeoService) {

  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'LSA Robotics',
      description: 'Laval Senior Academy Robotics Team',
      image: 'http://www.swlauriersb.qc.ca/schools/llhs/_pages/content/LSHS_LLHS/LSHS_LLHS%2030.jpg',
      slug: undefined
    })
    const options = {
      strings: ['LSA ROBOTICS', 'Innovative.', 'Forward Thinking.', 'Perseverance.'],
      typeSpeed: 90,
      backSpeed: 90,
      showCursor: false,
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 1000,
      loop: true,
      contentType: 'html',
 };

 const typed = new Typed('.typed-element', options);




  }

}
