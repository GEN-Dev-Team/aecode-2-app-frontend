import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgNotificationComponent } from './svg-notification.component';

describe('SvgNotificationComponent', () => {
  let component: SvgNotificationComponent;
  let fixture: ComponentFixture<SvgNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
