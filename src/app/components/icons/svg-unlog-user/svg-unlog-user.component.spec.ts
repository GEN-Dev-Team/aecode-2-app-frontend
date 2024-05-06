import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUnlogUserComponent } from './svg-unlog-user.component';

describe('SvgUnlogUserComponent', () => {
  let component: SvgUnlogUserComponent;
  let fixture: ComponentFixture<SvgUnlogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgUnlogUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUnlogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
