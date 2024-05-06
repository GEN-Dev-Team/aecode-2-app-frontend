import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgScriptComponent } from './svg-script.component';

describe('SvgScriptComponent', () => {
  let component: SvgScriptComponent;
  let fixture: ComponentFixture<SvgScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgScriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
