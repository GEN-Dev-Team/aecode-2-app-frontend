import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBlogComponent } from './svg-blog.component';

describe('SvgBlogComponent', () => {
  let component: SvgBlogComponent;
  let fixture: ComponentFixture<SvgBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
