import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsCarouselComponent } from './scripts-carousel.component';

describe('ScriptsCarouselComponent', () => {
  let component: ScriptsCarouselComponent;
  let fixture: ComponentFixture<ScriptsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptsCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
