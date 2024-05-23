import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgBuildingComponent } from './svg-building.component';

describe('SvgBuildingComponent', () => {
  let component: SvgBuildingComponent;
  let fixture: ComponentFixture<SvgBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgBuildingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
