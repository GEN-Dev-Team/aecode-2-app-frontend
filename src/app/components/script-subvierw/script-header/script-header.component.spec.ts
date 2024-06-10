import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptHeaderComponent } from './script-header.component';

describe('ScriptHeaderComponent', () => {
  let component: ScriptHeaderComponent;
  let fixture: ComponentFixture<ScriptHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
