import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptCarouselComponent } from './script-carousel.component';

describe('ScriptCarouselComponent', () => {
  let component: ScriptCarouselComponent;
  let fixture: ComponentFixture<ScriptCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
