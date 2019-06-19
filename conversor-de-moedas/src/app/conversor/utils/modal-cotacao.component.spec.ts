import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCotacaoComponent } from './modal-cotacao.component';
import { DataBrPipe } from '../pipes';
import { ConversorService } from '../services';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ModalCotacaoComponent', () => {
  let component: ModalCotacaoComponent;
  let fixture: ComponentFixture<ModalCotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalCotacaoComponent,
        DataBrPipe
      ],
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
