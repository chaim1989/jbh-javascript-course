import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeMsgComponent } from './compose-msg.component';

describe('ComposeMsgComponent', () => {
  let component: ComposeMsgComponent;
  let fixture: ComponentFixture<ComposeMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
