import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreatorElementComponent } from './post-creator-element.component';

describe('PostCreatorElementComponent', () => {
  let component: PostCreatorElementComponent;
  let fixture: ComponentFixture<PostCreatorElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCreatorElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCreatorElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
