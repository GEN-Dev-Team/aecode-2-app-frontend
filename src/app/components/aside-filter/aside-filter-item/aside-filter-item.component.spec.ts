import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideFilterItemComponent } from './aside-filter-item.component';

describe('AsideFilterItemComponent', () => {
  let component: AsideFilterItemComponent;
  let fixture: ComponentFixture<AsideFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideFilterItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsideFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
