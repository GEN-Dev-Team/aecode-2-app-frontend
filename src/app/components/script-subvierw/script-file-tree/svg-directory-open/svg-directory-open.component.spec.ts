import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDirectoryOpenComponent } from './svg-directory-open.component';

describe('SvgDirectoryOpenComponent', () => {
  let component: SvgDirectoryOpenComponent;
  let fixture: ComponentFixture<SvgDirectoryOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDirectoryOpenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDirectoryOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
