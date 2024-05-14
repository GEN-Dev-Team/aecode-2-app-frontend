import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsTopComponent } from './user-comments-top.component';

describe('UserCommentsTopComponent', () => {
  let component: UserCommentsTopComponent;
  let fixture: ComponentFixture<UserCommentsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCommentsTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCommentsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
