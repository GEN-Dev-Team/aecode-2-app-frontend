import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgForyouComponent } from './svg-foryou.component';

describe('SvgForyouComponent', () => {
  let component: SvgForyouComponent;
  let fixture: ComponentFixture<SvgForyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgForyouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgForyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
