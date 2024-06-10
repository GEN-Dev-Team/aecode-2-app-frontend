import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLanguageFormComponent } from './prog-language-form.component';

describe('ProgLanguageFormComponent', () => {
  let component: ProgLanguageFormComponent;
  let fixture: ComponentFixture<ProgLanguageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgLanguageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgLanguageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
