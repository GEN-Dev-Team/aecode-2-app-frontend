import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptContentComponent } from './script-content.component';

describe('ScriptContentComponent', () => {
  let component: ScriptContentComponent;
  let fixture: ComponentFixture<ScriptContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
