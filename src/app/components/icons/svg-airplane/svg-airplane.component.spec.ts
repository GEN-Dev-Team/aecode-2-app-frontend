import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAirplaneComponent } from './svg-airplane.component';

describe('SvgAirplaneComponent', () => {
  let component: SvgAirplaneComponent;
  let fixture: ComponentFixture<SvgAirplaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgAirplaneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgAirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
