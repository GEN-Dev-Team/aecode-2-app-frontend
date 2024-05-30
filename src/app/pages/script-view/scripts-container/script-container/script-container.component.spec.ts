import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptContainerComponent } from './script-container.component';

describe('ScriptContainerComponent', () => {
  let component: ScriptContainerComponent;
  let fixture: ComponentFixture<ScriptContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
