import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgDownloadComponent } from './svg-download.component';

describe('SvgDownloadComponent', () => {
  let component: SvgDownloadComponent;
  let fixture: ComponentFixture<SvgDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgDownloadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
