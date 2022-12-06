import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDataPageComponent } from './insert-data-page.component';

describe('InsertDataPageComponent', () => {
  let component: InsertDataPageComponent;
  let fixture: ComponentFixture<InsertDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
