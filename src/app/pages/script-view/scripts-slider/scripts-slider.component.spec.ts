import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsSliderComponent } from './scripts-slider.component';

describe('ScriptsSliderComponent', () => {
  let component: ScriptsSliderComponent;
  let fixture: ComponentFixture<ScriptsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptsSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
