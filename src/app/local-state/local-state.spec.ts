import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalState } from './local-state';

describe('LocalState', () => {
  let component: LocalState;
  let fixture: ComponentFixture<LocalState>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocalState]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalState);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
