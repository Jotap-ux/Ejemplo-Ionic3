import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    //permite crear objetos que se pueden
    //utilizar en nuestra pagina TypeScript
  constructor() {}

    //para definir una variable se ocupa
    //nombre:Tipo="valor inicial", los tipos string, number, boolean, any, Array
    rut:string="12345678-k";
    nombreCompleto:string;
    edad:number;

 
}
