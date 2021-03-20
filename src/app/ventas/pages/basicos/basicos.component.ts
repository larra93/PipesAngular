import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'felipe';
  nombreUpper: string = 'FELIPE';
  nombreCompleto: string = 'FelIPe LArraGuibel';

  fecha: Date = new Date();
  

}
