import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationContainerComponent } from './recomendation-container.component';

describe('RecomendationContainerComponent', () => {
  let component: RecomendationContainerComponent;
  let fixture: ComponentFixture<RecomendationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecomendationContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecomendationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
