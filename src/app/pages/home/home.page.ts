import { Component } from '@angular/core';
//importar el componente de manejo formularios
import { FormControl, FormGroup } from '@angular/forms';



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

    //crearemos controles de formularios asociados a la etiqueta <ion-input>
    //<ion-input [FormControl]="elRut"> </ion-input>
    persona = new FormGroup({
      elRut : new FormControl(''),
      elNombreCompleto : new FormControl(''),
      laEdad : new FormControl('')
    });
    

    //creacion de un arreglo
    lista_personas = new Array();
    perso:any;

    //creacion de un metodo
    grabar(){
     console.log(this.persona.value);
     this.perso = {
       rut:this.persona.controls.elRut.value,
       nombre:this.persona.controls.elNombreCompleto.value,
       edad:this.persona.controls.laEdad.value
     }
     console.log(this.perso);
     this.lista_personas.push(this.perso);
    }
    eliminar(){

    }
    listar(){

    }



 
}
