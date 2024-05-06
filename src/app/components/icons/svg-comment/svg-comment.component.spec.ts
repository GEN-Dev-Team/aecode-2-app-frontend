import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCommentComponent } from './svg-comment.component';

describe('SvgCommentComponent', () => {
  let component: SvgCommentComponent;
  let fixture: ComponentFixture<SvgCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCommentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
