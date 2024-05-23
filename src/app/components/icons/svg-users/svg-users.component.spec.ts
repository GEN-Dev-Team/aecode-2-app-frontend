import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgUsersComponent } from './svg-users.component';

describe('SvgUsersComponent', () => {
  let component: SvgUsersComponent;
  let fixture: ComponentFixture<SvgUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SvgUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
