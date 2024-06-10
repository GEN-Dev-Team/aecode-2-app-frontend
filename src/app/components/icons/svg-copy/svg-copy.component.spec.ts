import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCopyComponent } from './svg-copy.component';

describe('SvgCopyComponent', () => {
  let component: SvgCopyComponent;
  let fixture: ComponentFixture<SvgCopyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCopyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
