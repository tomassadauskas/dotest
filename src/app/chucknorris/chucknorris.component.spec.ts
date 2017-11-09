import { ChucknorrisService } from './../services/chucknorris.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChucknorrisComponent } from './chucknorris.component';

import { FormsModule } from '@angular/forms';

describe('ChucknorrisComponent', () => {
  let component: ChucknorrisComponent;
  let fixture: ComponentFixture<ChucknorrisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ ChucknorrisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChucknorrisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should use chuck service', () => {
    fixture = TestBed.createComponent(ChucknorrisComponent);
    component = fixture.componentInstance;
    let chuckService = fixture.debugElement.injector.get(ChucknorrisService);
    fixture.autoDetectChanges();
    expect(chuckService).toBeTruthy();
  });
});
