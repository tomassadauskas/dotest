import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckFactsSingleComponent } from './chuck-facts-single.component';

describe('ChuckFactsSingleComponent', () => {
  let component: ChuckFactsSingleComponent;
  let fixture: ComponentFixture<ChuckFactsSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckFactsSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckFactsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
