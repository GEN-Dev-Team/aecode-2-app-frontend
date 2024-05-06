import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgProfileFilterComponent } from './svg-profile-filter.component';

describe('SvgProfileFilterComponent', () => {
  let component: SvgProfileFilterComponent;
  let fixture: ComponentFixture<SvgProfileFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgProfileFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgProfileFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
