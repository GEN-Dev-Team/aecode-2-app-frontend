import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgQuestionIconComponent } from './svg-question-icon.component';

describe('SvgQuestionIconComponent', () => {
  let component: SvgQuestionIconComponent;
  let fixture: ComponentFixture<SvgQuestionIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgQuestionIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgQuestionIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
