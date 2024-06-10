import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAddScriptComponent } from './svg-add-script.component';

describe('SvgAddScriptComponent', () => {
  let component: SvgAddScriptComponent;
  let fixture: ComponentFixture<SvgAddScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgAddScriptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgAddScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
