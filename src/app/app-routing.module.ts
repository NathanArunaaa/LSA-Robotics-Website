import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//page imports
import { HomeComponent } from './home/home.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { ProjectsComponent } from './projects/projects.component';
import { OurMissionComponent } from './our-mission/our-mission.component';
import { SoftwareListComponent } from './software-list/software-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing-page', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'team-members', component: TeamMembersComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'competitions', component: CompetitionsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'our-mission', component: OurMissionComponent },
  { path: 'software-list', component: SoftwareListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
