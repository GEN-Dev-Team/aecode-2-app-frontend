import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUnbookmarkComponent } from './svg-unbookmark.component';

describe('SvgUnbookmarkComponent', () => {
  let component: SvgUnbookmarkComponent;
  let fixture: ComponentFixture<SvgUnbookmarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgUnbookmarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUnbookmarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
