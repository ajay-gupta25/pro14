import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellCompComponent } from './shell-comp.component';

describe('ShellCompComponent', () => {
  let component: ShellCompComponent;
  let fixture: ComponentFixture<ShellCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellCompComponent]
    });
    fixture = TestBed.createComponent(ShellCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
