import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCaretUpComponent } from './svg-caret-up.component';

describe('SvgCaretUpComponent', () => {
  let component: SvgCaretUpComponent;
  let fixture: ComponentFixture<SvgCaretUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCaretUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCaretUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
