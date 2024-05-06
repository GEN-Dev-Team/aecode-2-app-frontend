import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArrowRightComponent } from './svg-arrow-right.component';

describe('SvgArrowRightComponent', () => {
  let component: SvgArrowRightComponent;
  let fixture: ComponentFixture<SvgArrowRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgArrowRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgArrowRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
