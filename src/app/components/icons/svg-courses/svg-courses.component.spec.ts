import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCoursesComponent } from './svg-courses.component';

describe('SvgCoursesComponent', () => {
  let component: SvgCoursesComponent;
  let fixture: ComponentFixture<SvgCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
