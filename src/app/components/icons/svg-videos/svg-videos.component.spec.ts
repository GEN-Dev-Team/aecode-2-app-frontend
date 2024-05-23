import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgVideosComponent } from './svg-videos.component';

describe('SvgVideosComponent', () => {
  let component: SvgVideosComponent;
  let fixture: ComponentFixture<SvgVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgVideosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
