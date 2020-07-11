import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampledirectiveComponent } from './exampledirective.component';

describe('ExampledirectiveComponent', () => {
  let component: ExampledirectiveComponent;
  let fixture: ComponentFixture<ExampledirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampledirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampledirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
