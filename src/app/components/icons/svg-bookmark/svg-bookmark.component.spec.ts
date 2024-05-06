import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBookmarkComponent } from './svg-bookmark.component';

describe('SvgBookmarkComponent', () => {
  let component: SvgBookmarkComponent;
  let fixture: ComponentFixture<SvgBookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBookmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
