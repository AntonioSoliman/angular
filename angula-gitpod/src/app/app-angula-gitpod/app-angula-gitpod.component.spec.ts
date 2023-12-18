import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAngulaGitpodComponent } from './app-angula-gitpod.component';

describe('AppAngulaGitpodComponent', () => {
  let component: AppAngulaGitpodComponent;
  let fixture: ComponentFixture<AppAngulaGitpodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAngulaGitpodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAngulaGitpodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
