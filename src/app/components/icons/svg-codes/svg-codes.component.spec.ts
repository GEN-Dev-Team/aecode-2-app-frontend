import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCodesComponent } from './svg-codes.component';

describe('SvgCodesComponent', () => {
  let component: SvgCodesComponent;
  let fixture: ComponentFixture<SvgCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCodesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
