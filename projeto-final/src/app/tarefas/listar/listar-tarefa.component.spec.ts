import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefaComponent } from './listar-tarefa.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListarTarefaComponent', () => {
  let component: ListarTarefaComponent;
  let fixture: ComponentFixture<ListarTarefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListarTarefaComponent
      ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
