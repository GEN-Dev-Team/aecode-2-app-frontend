import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgViewPasswordComponent } from './svg-view-password.component';

describe('SvgViewPasswordComponent', () => {
  let component: SvgViewPasswordComponent;
  let fixture: ComponentFixture<SvgViewPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgViewPasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgViewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
