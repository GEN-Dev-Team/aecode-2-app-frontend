import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsContainerComponent } from './scripts-container.component';

describe('ScriptsContainerComponent', () => {
  let component: ScriptsContainerComponent;
  let fixture: ComponentFixture<ScriptsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScriptsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
