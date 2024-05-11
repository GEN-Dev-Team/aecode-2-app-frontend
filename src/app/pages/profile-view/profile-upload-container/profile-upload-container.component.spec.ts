import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadContainerComponent } from './profile-upload-container.component';

describe('ProfileUploadContainerComponent', () => {
  let component: ProfileUploadContainerComponent;
  let fixture: ComponentFixture<ProfileUploadContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUploadContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileUploadContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
