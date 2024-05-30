import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptSubvierwComponent } from './script-subvierw.component';

describe('ScriptSubvierwComponent', () => {
  let component: ScriptSubvierwComponent;
  let fixture: ComponentFixture<ScriptSubvierwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptSubvierwComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptSubvierwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
