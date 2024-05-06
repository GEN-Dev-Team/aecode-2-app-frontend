import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgvTrashComponent } from './sgv-trash.component';

describe('SgvTrashComponent', () => {
  let component: SgvTrashComponent;
  let fixture: ComponentFixture<SgvTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SgvTrashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SgvTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
