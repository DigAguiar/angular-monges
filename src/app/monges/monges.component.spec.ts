import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongesComponent } from './monges.component';

describe('MongesComponent', () => {
  let component: MongesComponent;
  let fixture: ComponentFixture<MongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MongesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
