import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDirectoryClosedComponent } from './svg-directory-closed.component';

describe('SvgDirectoryClosedComponent', () => {
  let component: SvgDirectoryClosedComponent;
  let fixture: ComponentFixture<SvgDirectoryClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDirectoryClosedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDirectoryClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
