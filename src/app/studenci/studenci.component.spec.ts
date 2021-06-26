import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenciComponent } from './studenci.component';

describe('StudenciComponent', () => {
  let component: StudenciComponent;
  let fixture: ComponentFixture<StudenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
