import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgSaveScriptComponent } from './svg-save-script.component';

describe('SvgSaveScriptComponent', () => {
  let component: SvgSaveScriptComponent;
  let fixture: ComponentFixture<SvgSaveScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgSaveScriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgSaveScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
