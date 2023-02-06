import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsarLoginComponent } from './lsar-login.component';

describe('LsarLoginComponent', () => {
  let component: LsarLoginComponent;
  let fixture: ComponentFixture<LsarLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsarLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LsarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
