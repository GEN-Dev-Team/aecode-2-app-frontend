import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgFilesComponent } from './svg-files.component';

describe('SvgFilesComponent', () => {
  let component: SvgFilesComponent;
  let fixture: ComponentFixture<SvgFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
