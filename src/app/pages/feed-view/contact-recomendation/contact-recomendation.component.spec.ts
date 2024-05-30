import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactRecomendationComponent } from './contact-recomendation.component';

describe('ContactRecomendationComponent', () => {
  let component: ContactRecomendationComponent;
  let fixture: ComponentFixture<ContactRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactRecomendationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
