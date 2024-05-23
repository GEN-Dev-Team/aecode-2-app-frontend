import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgPicturesComponent } from './svg-pictures.component';

describe('SvgPicturesComponent', () => {
  let component: SvgPicturesComponent;
  let fixture: ComponentFixture<SvgPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgPicturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
