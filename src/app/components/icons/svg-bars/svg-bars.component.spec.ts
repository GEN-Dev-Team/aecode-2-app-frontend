import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBarsComponent } from './svg-bars.component';

describe('SvgBarsComponent', () => {
  let component: SvgBarsComponent;
  let fixture: ComponentFixture<SvgBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
