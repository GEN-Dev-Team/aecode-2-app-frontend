import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultimediaCarouselComponent } from './multimedia-carousel.component';

describe('MultimediaCarouselComponent', () => {
  let component: MultimediaCarouselComponent;
  let fixture: ComponentFixture<MultimediaCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultimediaCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultimediaCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
