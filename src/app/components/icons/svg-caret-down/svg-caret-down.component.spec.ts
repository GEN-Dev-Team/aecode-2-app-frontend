import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCaretDownComponent } from './svg-caret-down.component';

describe('SvgCaretDownComponent', () => {
  let component: SvgCaretDownComponent;
  let fixture: ComponentFixture<SvgCaretDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCaretDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCaretDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
