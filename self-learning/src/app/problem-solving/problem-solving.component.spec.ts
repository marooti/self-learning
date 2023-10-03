import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemSolvingComponent } from './problem-solving.component';

describe('ProblemSolvingComponent', () => {
  let component: ProblemSolvingComponent;
  let fixture: ComponentFixture<ProblemSolvingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProblemSolvingComponent]
    });
    fixture = TestBed.createComponent(ProblemSolvingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
