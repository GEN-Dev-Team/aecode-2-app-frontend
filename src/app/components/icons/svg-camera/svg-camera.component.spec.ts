import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCameraComponent } from './svg-camera.component';

describe('SvgCameraComponent', () => {
  let component: SvgCameraComponent;
  let fixture: ComponentFixture<SvgCameraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCameraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCameraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
