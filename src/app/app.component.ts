import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LSA-Robotics';
  showNav = true;
  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (this.router.url === '/landing-page' ) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    });
  }
}




