import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaboradorComponent } from './colaborador.component';

describe('ColaboradorComponent', () => {
  let component: ColaboradorComponent;
  let fixture: ComponentFixture<ColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaboradorComponent]
    });
    fixture = TestBed.createComponent(ColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
