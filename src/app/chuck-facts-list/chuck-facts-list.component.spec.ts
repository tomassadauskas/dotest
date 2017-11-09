import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckFactsListComponent } from './chuck-facts-list.component';

describe('ChuckFactsListComponent', () => {
  let component: ChuckFactsListComponent;
  let fixture: ComponentFixture<ChuckFactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckFactsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckFactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
