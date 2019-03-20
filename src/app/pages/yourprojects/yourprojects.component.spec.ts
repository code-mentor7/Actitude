import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourprojectsComponent } from './yourprojects.component';

describe('YourprojectsComponent', () => {
  let component: YourprojectsComponent;
  let fixture: ComponentFixture<YourprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
