import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgCloseModelComponent } from './svg-close-model.component';

describe('SvgCloseModelComponent', () => {
  let component: SvgCloseModelComponent;
  let fixture: ComponentFixture<SvgCloseModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgCloseModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgCloseModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
