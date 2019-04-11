import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVListComponent } from './cv-list.component';

describe('CVListComponent', () => {
  let component: CVListComponent;
  let fixture: ComponentFixture<CVListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CVListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
