import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprojectsComponent } from './allprojects.component';

describe('AllprojectsComponent', () => {
  let component: AllprojectsComponent;
  let fixture: ComponentFixture<AllprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
