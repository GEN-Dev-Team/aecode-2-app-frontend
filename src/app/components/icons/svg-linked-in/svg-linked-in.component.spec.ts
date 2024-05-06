import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgLinkedInComponent } from './svg-linked-in.component';

describe('SvgLinkedInComponent', () => {
  let component: SvgLinkedInComponent;
  let fixture: ComponentFixture<SvgLinkedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgLinkedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgLinkedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
