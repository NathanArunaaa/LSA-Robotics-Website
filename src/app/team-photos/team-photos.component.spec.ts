import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPhotosComponent } from './team-photos.component';

describe('TeamPhotosComponent', () => {
  let component: TeamPhotosComponent;
  let fixture: ComponentFixture<TeamPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
