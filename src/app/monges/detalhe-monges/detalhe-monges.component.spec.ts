import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheMongesComponent } from './detalhe-monges.component';

describe('DetalheMongesComponent', () => {
  let component: DetalheMongesComponent;
  let fixture: ComponentFixture<DetalheMongesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheMongesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalheMongesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
