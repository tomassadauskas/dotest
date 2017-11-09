import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { ChucknorrisService } from './services/chucknorris.service';

import { ChucknorrisComponent } from './chucknorris/chucknorris.component';
import { ChuckFactComponent } from './chuck-fact/chuck-fact.component';
import { ChuckFactsListComponent } from './chuck-facts-list/chuck-facts-list.component';
import { ChuckFactsTableComponent } from './chuck-facts-table/chuck-facts-table.component';
import { ChuckFactsSingleComponent } from './chuck-facts-single/chuck-facts-single.component';

@NgModule({
  declarations: [
    AppComponent,
    ChucknorrisComponent,
    ChuckFactComponent,
    ChuckFactsListComponent,
    ChuckFactsTableComponent,
    ChuckFactsSingleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ChucknorrisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
