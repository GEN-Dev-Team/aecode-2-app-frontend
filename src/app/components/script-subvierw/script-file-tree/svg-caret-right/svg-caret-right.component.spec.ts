import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCaretRightComponent } from './svg-caret-right.component';

describe('SvgCaretRightComponent', () => {
  let component: SvgCaretRightComponent;
  let fixture: ComponentFixture<SvgCaretRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCaretRightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCaretRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
