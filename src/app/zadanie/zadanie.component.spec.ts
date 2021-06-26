import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadanieComponent } from './zadanie.component';

describe('ZadanieComponent', () => {
  let component: ZadanieComponent;
  let fixture: ComponentFixture<ZadanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadanieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
