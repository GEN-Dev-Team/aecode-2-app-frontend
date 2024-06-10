import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptFileTreeComponent } from './script-file-tree.component';

describe('ScriptFileTreeComponent', () => {
  let component: ScriptFileTreeComponent;
  let fixture: ComponentFixture<ScriptFileTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptFileTreeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptFileTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
