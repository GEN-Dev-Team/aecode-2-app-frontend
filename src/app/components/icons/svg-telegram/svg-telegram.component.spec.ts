import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTelegramComponent } from './svg-telegram.component';

describe('SvgTelegramComponent', () => {
  let component: SvgTelegramComponent;
  let fixture: ComponentFixture<SvgTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTelegramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
