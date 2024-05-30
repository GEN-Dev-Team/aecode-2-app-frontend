import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadScriptViewComponent } from './upload-script-view.component';

describe('UploadScriptViewComponent', () => {
  let component: UploadScriptViewComponent;
  let fixture: ComponentFixture<UploadScriptViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadScriptViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadScriptViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
