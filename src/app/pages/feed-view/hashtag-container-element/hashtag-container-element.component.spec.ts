import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HashtagContainerElementComponent } from './hashtag-container-element.component';

describe('HashtagContainerElementComponent', () => {
  let component: HashtagContainerElementComponent;
  let fixture: ComponentFixture<HashtagContainerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HashtagContainerElementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HashtagContainerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
