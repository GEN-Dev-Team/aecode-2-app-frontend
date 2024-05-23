import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorContainerComponent } from './post-creator-container.component';

describe('PostCreatorContainerComponent', () => {
  let component: PostCreatorContainerComponent;
  let fixture: ComponentFixture<PostCreatorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCreatorContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCreatorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
