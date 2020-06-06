import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  /*
    Retorna um observable contendo os dados a serem
    exibidos no gráfico
  */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      //next notify every listener as soon as it gets the data
      //this place is suitable for a server call
      observable.complete();
    });
  }


}
