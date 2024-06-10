import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLanguageComponent } from './prog-language.component';

describe('ProgLanguageComponent', () => {
  let component: ProgLanguageComponent;
  let fixture: ComponentFixture<ProgLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgLanguageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
