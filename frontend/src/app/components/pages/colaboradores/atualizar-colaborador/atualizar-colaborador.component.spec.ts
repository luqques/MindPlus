import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarColaboradorComponent } from './atualizar-colaborador.component';

describe('AtualizarColaboradorComponent', () => {
  let component: AtualizarColaboradorComponent;
  let fixture: ComponentFixture<AtualizarColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizarColaboradorComponent]
    });
    fixture = TestBed.createComponent(AtualizarColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
