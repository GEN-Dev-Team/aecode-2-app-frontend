import { Component } from '@angular/core';
import { ProfileUploadContainerBoxComponent } from './profile-upload-container-box/profile-upload-container-box.component';

@Component({
  selector: 'app-profile-upload-container',
  standalone: true,
  imports: [ProfileUploadContainerBoxComponent],
  templateUrl: './profile-upload-container.component.html',
  styleUrl: './profile-upload-container.component.css',
})
export class ProfileUploadContainerComponent {}
