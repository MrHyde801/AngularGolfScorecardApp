import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeeBoxSelectionComponent } from './tee-box-selection.component';

describe('TeeBoxSelectionComponent', () => {
  let component: TeeBoxSelectionComponent;
  let fixture: ComponentFixture<TeeBoxSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeeBoxSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeeBoxSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
