import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoComponent } from './agendamento.component';

describe('AgendamentoComponent', () => {
  let component: AgendamentoComponent;
  let fixture: ComponentFixture<AgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendamentoComponent]
    });
    fixture = TestBed.createComponent(AgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
