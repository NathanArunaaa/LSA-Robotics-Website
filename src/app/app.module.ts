import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProjectsComponent } from './projects/projects.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { SoftwareListComponent } from './software-list/software-list.component';


@NgModule({

  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,



  ],

  declarations: [
    AppComponent,
    TopnavComponent,
    HomeComponent,
    SidenavComponent,
    TeamMembersComponent,
    LandingPageComponent,
    AboutComponent,
    FooterComponent,
    SponsorsComponent,
    ProjectsComponent,
    CompetitionsComponent,
    OurMissionComponent,
    SoftwareListComponent,


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
