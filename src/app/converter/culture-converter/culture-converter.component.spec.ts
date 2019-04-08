import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureConverterComponent } from './culture-converter.component';

describe('CultureConverterComponent', () => {
  let component: CultureConverterComponent;
  let fixture: ComponentFixture<CultureConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CultureConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CultureConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
