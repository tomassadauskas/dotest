import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckFactsTableComponent } from './chuck-facts-table.component';

describe('ChuckFactsTableComponent', () => {
  let component: ChuckFactsTableComponent;
  let fixture: ComponentFixture<ChuckFactsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckFactsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckFactsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
