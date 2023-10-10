import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child2ContainerComponent } from './child2-container.component';

describe('Child2ContainerComponent', () => {
  let component: Child2ContainerComponent;
  let fixture: ComponentFixture<Child2ContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Child2ContainerComponent]
    });
    fixture = TestBed.createComponent(Child2ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
