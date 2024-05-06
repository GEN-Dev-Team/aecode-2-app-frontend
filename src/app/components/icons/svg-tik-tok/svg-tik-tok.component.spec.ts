import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTikTokComponent } from './svg-tik-tok.component';

describe('SvgTikTokComponent', () => {
  let component: SvgTikTokComponent;
  let fixture: ComponentFixture<SvgTikTokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgTikTokComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgTikTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
