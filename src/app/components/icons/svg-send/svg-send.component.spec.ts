import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSendComponent } from './svg-send.component';

describe('SvgSendComponent', () => {
  let component: SvgSendComponent;
  let fixture: ComponentFixture<SvgSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
