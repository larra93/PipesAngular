import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  nombre: string = 'Felipe';
  genero: string = 'masculino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }


  clientes: string[] = ['Maria' ,'Juan','Pedro'];

  clientesMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }


  
  
  cambiarPersona(){
    this.nombre = 'Anette';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }



  //KeyValue Pipe

  persona = {
    nombre: 'Felipe',
    edad: 27,
    direccion: 'Coquimbo, Chile'
  }

  //jsonPipes

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,

    },
    {
      nombre: 'Robin',
      vuela: false,
      
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      
    }
  ]

  //async pipe

  miObservable = interval(1000);
  
  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
