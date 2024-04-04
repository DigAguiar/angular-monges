import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMongeComponent } from './add-monge.component';

describe('AddMongeComponent', () => {
  let component: AddMongeComponent;
  let fixture: ComponentFixture<AddMongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddMongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
