import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPaleteComponent } from './svg-palete.component';

describe('SvgPaleteComponent', () => {
  let component: SvgPaleteComponent;
  let fixture: ComponentFixture<SvgPaleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgPaleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPaleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
