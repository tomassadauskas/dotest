import { ChuckFactsTableComponent } from './chuck-facts-table/chuck-facts-table.component';
import { ChuckFactsSingleComponent } from './chuck-facts-single/chuck-facts-single.component';
import { ChuckFactsListComponent } from './chuck-facts-list/chuck-facts-list.component';
import { ChuckFactComponent } from './chuck-fact/chuck-fact.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent,
        ChucknorrisComponent,
        ChuckFactComponent,
        ChuckFactsListComponent,
        ChuckFactsTableComponent,
        ChuckFactsSingleComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
