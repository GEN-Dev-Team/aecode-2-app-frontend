import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFilterComponent } from './svg-filter.component';

describe('SvgFilterComponent', () => {
  let component: SvgFilterComponent;
  let fixture: ComponentFixture<SvgFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
