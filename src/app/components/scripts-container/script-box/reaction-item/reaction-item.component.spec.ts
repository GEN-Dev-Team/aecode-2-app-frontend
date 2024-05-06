import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionItemComponent } from './reaction-item.component';

describe('ReactionItemComponent', () => {
  let component: ReactionItemComponent;
  let fixture: ComponentFixture<ReactionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactionItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
