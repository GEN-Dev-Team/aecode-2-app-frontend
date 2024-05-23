import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgOffersComponent } from './svg-offers.component';

describe('SvgOffersComponent', () => {
  let component: SvgOffersComponent;
  let fixture: ComponentFixture<SvgOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgOffersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
