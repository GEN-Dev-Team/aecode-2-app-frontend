import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUploadContainerBoxComponent } from './profile-upload-container-box.component';

describe('ProfileUploadContainerBoxComponent', () => {
  let component: ProfileUploadContainerBoxComponent;
  let fixture: ComponentFixture<ProfileUploadContainerBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileUploadContainerBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileUploadContainerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
