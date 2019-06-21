import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
      inject([CalculadoraService], (service: CalculadoraService) => {
        let soma = service.calcular(1, 4, CalculadoraService.SOMA);
        expect(soma).toEqual(5);
    })
  );

  it('deve garantir que 1 - 4 = -3',
      inject([CalculadoraService], (service: CalculadoraService) => {
        let subtracao = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
        expect(subtracao).toEqual(-3);
    })
  );

  it('deve garantir que 1 / 4 = 0.25',
      inject([CalculadoraService], (service: CalculadoraService) => {
        let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
        expect(divisao).toEqual(0.25);
    })
  );

  it('deve garantir que 1 * 4 = 4',
      inject([CalculadoraService], (service: CalculadoraService) => {
        let multiplicacao = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
        expect(multiplicacao).toEqual(4);
    })
  );

  it('operação inválida',
      inject([CalculadoraService], (service: CalculadoraService) => {
        let invalido = service.calcular(1, 4, '%');
        expect(invalido).toEqual(0);
    })
  );
});
